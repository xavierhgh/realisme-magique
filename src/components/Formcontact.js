import React from "react";
import Labeltexte from "./Labeltexte";
import { useState } from "react";

function Formcontact({ useRef }) {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    objet: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      try {
        const response = await fetch(
          "https://xavier.techniques-graphiques.be/realisme-magique/send-mail-contact.php",
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
    if (!values.nom.trim()) {
      errors.nom = "Le nom est requis";
    }
    if (!values.prenom.trim()) {
      errors.prenom = "Le prénom est requis";
    }
    if (!values.email.trim()) {
      errors.email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "L'email est invalide";
    }
    if (!values.objet.trim()) {
      errors.objet = "L'objet est requis";
    }
    if (!values.message.trim()) {
      errors.message = "Le message est requis";
    }
    return errors;
  };

  return (
    <form
      ref={useRef}
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 sm:w-full"
    >
      <div className="flex flex-row gap-4">
        <Labeltexte
          label="Prénom"
          id="prenom"
          placeholder="John"
          value={formData.prenom}
          type="texte"
          error={errors.prenom}
          onChange={handleChange}
        />
        <Labeltexte
          label="Nom"
          id="nom"
          placeholder="Doe"
          value={formData.nom}
          type="texte"
          error={errors.nom}
          onChange={handleChange}
        />
      </div>
      <Labeltexte
        label="Email"
        id="email"
        placeholder="john.doe@example.com"
        value={formData.email}
        type="texte"
        error={errors.email}
        onChange={handleChange}
      />
      <Labeltexte
        label="Objet"
        id="objet"
        placeholder="Demande d'information"
        value={formData.objet}
        type="texte"
        error={errors.objet}
        onChange={handleChange}
      />
      <Labeltexte
        label="Message"
        id="message"
        placeholder="Votre message ici..."
        value={formData.message}
        type="texte"
        error={errors.message}
        onChange={handleChange}
        className="h-32"
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
            {" "}
            Message envoyez avec succès !Nous vous contacterons dans les plus
            brefs délais.
          </p>
        )}
      </div>
    </form>
  );
}

export default Formcontact;
