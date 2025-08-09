import React, { useEffect, useRef, useState } from "react";
import Labeltexte from "./Labeltexte";
import { scrollFromRight, scrollFromLeft } from "../utilitaire/gsapUtilitaire";
import Arbres from "./Arbres";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Concours() {
  // aide avec une vidéo https://youtu.be/Ou-RUuujpXY https://youtu.be/c25pkDJ1xUI
  const [formData, setFormData] = useState({
    name: "",
    firstname: "",
    email: "",
    confirm_email: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const refDroite = useRef(null);
  const refGauche = useRef(null);

  // Ajoute une ref pour chaque arbre
  const arbresRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    scrollFromRight(refDroite);
    scrollFromLeft(refGauche);

    arbresRefs.forEach((ref, i) => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 100%",
              end: "bottom 0%",
              toggleActions: "play none none reverse",
              markers: true,
            },
          }
        );
      }
    });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validate(formData));
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      try {
        const response = await fetch(
          "https://xavier.techniques-graphiques.be/realisme-magique/send-mail.php",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (response.ok) {
          setSubmitted(true);
        } else {
          setErrors({
            api: "Il y a eu une erreur lors de l'envoi du formulaire. Veuillez réessayer.",
          });
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setErrors({
          api: "Il y a eu une erreur lors de l'envoi du formulaire. Veuillez réessayer.",
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const validate = (values) => {
    let errors = {};
    if (!values.name.trim()) {
      errors.name = "Le nom est requis";
    }
    if (!values.firstname.trim()) {
      errors.firstname = "Le prénom est requis";
    }
    if (!values.email.trim()) {
      errors.email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "L'email est invalide";
    }
    if (!values.confirm_email.trim()) {
      errors.confirm_email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(values.confirm_email)) {
      errors.confirm_email = "L'email est invalide";
    } else if (values.email !== values.confirm_email) {
      errors.confirm_email = "Les emails ne correspondent pas";
      errors.email = "Les emails ne correspondent pas";
    }

    return errors;
  };
  return (
    <div className="padding relative">
      <Arbres ref={arbresRefs[0]} className="-top-4 right-0 lg:top-0 lg:right-4" />
      <Arbres ref={arbresRefs[1]} className="bottom-0 left-0 lg:top-24 lg:left-4" miroir="1" />
      <Arbres ref={arbresRefs[2]} className="hidden lg:block top-[74%] right-[47%]" />
      <div className="bg-noirclair border border-accentuation p-4 flex flex-col md:flex-row  justify-around gap-8 shadow-2xl drop-shadow-middle">
        <div ref={refGauche} className="flex flex-col gap-4 md:w-1/3">
          <h2 className="mt-6 mb-5">Concours</h2>
          <p>
            Vous rêvez de découvrir une exposition exceptionnelle sans dépenser
            un centime ? C’est le moment de tenter votre chance ! Participez dès
            maintenant à notre concours et remportez une place gratuite pour
            vivre une expérience inoubliable.
          </p>
          <p>
            Pour participer, il vous suffit de remplir le formulaire ci-contre.
            Bonne chance !
          </p>
        </div>
        <form
          ref={refDroite}
          className="flex flex-col gap-4 md:w-1/3"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-row gap-4">
            <Labeltexte
              label="Prénom"
              id="firstname"
              placeholder="John"
              value={formData.firstname}
              type="text"
              error={errors.firstname}
              onChange={handleChange}
            />
            <Labeltexte
              label="Nom"
              id="name"
              placeholder="Doe"
              value={formData.name}
              type="text"
              error={errors.name}
              onChange={handleChange}
            />
          </div>
          <Labeltexte
            label="Email"
            id="email"
            placeholder="john.doe@example.com"
            value={formData.email}
            type="text"
            error={errors.email}
            onChange={handleChange}
          />
          <Labeltexte
            label="Confirmation Email"
            id="confirm_email"
            placeholder="john.doe@example.com"
            value={formData.confirm_email}
            type="text"
            error={errors.confirm_email}
            onChange={handleChange}
          />
          <div className="my-4 flex flex-col items-center gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`btn text-noir hover:text-blanc ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              } ${submitted ? "ring-2 ring-primary text-primary" : ""}`}
            >
              <span className="before-effect"></span>
              <span className="after-effect"></span>
              <span className="btn-text">Participer</span>
            </button>
            {isSubmitting && <p className="text-less">Envoi en cours...</p>}
            {errors.api && <p className="text-less text-rouge">{errors.api}</p>}
            {submitted && (
              <p className="text-less text-accentuation">
                Votre participation a été enregistrée avec succès ! Nous vous
                contacterons par email si vous êtes le gagnant.
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Concours;
