import React, { useState } from "react";
import Labeltexte from "./Labeltexte";

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
        console.log(response);

        if(response.ok) {
          setSubmitted(true);
        } else {
          setErrors({
            api:"Il y a eu une erreur lors de l'envoi du formulaire. Veuillez réessayer."
          })
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
    return <div>GG ! Vous avez participé au concours.</div>;
  }
  return (
    <div className="m-5">
      <h2 className="mt-6 mb-9">Concours</h2>
      <div className="flex flex-col gap-4">
        <p>
          Participez à notre concours et remportez une place gratuite pour une
          exposition exceptionnelle !
        </p>
        <form onSubmit={handleSubmit}>
          <Labeltexte
            label="Nom"
            id="name"
            placeholder="Doe"
            value={formData.name}
            type="text"
            error={errors.name}
            onChange={handleChange}
          />
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

          <button
            className="bg-primary text-more p-2 rounded hover:bg-accentuation transition-colors"
            type="submit"
            disabled={isSubmitting}
          >
            Participer
          </button>
          {isSubmitting && <p>Envoi en cours...</p>}
          {errors.api && <p className="text-red-500">{errors.api}</p>}
        </form>
      </div>
    </div>
  );
}

export default Concours;
