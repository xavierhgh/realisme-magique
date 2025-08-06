import React, { useEffect, useRef, useState } from "react";
import Labeltexte from "./Labeltexte";
import { scrollFromRight, scrollFromLeft } from "../utilitaire/gsapUtilitaire";

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

  useEffect(() => {
    scrollFromRight(refDroite);
    scrollFromLeft(refGauche);
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
        const response = await fetch("https://renardpoint.be/send-mail.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

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
  if (submitted) {
    return (
      <div className="m-5">
        <h2 className="mt-6 mb-9">Concours</h2>
        <p className="text-more text-accentuation">
          Merci d'avoir participé au concours ! Vous recevrez un mail si vous
          avez gagné.
        </p>
      </div>
    );
  }
  return (
    <div className="padding flex flex-col sm:flex-row gap-8">
      <div ref={refGauche} className="flex flex-col gap-4 sm:w-1/2">
        <h2 className="mt-6 mb-5">Concours</h2>
        <p>
          Vous rêvez de découvrir une exposition exceptionnelle sans dépenser un
          centime ? C’est le moment de tenter votre chance ! Participez dès
          maintenant à notre concours et remportez une place gratuite pour vivre
          une expérience inoubliable.
        </p>
        <p>
          Pour participer, il vous suffit de remplir le formulaire ci-contre.
          Bonne chance !
        </p>
      </div>
      <form ref={refDroite} className="flex flex-col gap-4 sm:w-1/2" onSubmit={handleSubmit}>
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
          <button className="bouton " type="submit" disabled={isSubmitting}>
            Participer
          </button>
          {submitted && (
            <p className="text-less text-accentuation">
              {" "}
              Votre participation a été enregistrée avec succès ! Nous vous
              contacterons par email si vous êtes le gagnant.
            </p>
          )}
          {isSubmitting && <p className="text-less">Envoi en cours...</p>}
          {errors.api && <p className="text-less text-rouge">{errors.api}</p>}
        </div>
      </form>
    </div>
  );
}

export default Concours;
