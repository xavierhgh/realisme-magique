<?php 

// CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Réponse à la pré-requête OPTIONS (preflight)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    if (isset($data['nom']) && isset($data['prenom']) && isset($data['email']) && isset($data['objet']) && isset($data['message'])) {
        $nom = $data['nom'] ?? "";
        $prenom = $data['prenom'] ?? "";
        $email = $data['email'] ?? "";
        $objet = $data['objet'] ?? "";
        $message = $data['message'] ?? "";

        if(empty($nom) || empty($prenom) || empty($email) || empty($objet) || empty($message)) {
            http_response_code(400);
            echo json_encode(['error' => 'Tous les champs sont requis.']);
            exit;
        }

        if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            http_response_code(400);
            echo json_encode(['error' => 'Adresse e-mail invalide.']);
            exit;
        }

        // Envoi de l'e-mail
        $to = 'emmanuel.lemal@he-ferrer.eu';
        $subject = $objet;
        $body = $message . "\n\nNom: $nom\nPrénom: $prenom\n";
        $header = "From: $email";

        if(mail($to, $subject, $body, $header)) {
            http_response_code(200);
            echo json_encode(['success' => 'Participation envoyé avec succès.']);
        } else {
            http_response_code(500);
            echo json_encode(['error' => 'Échec de la participation.']);
        }
    }
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Méthode non autorisée.']);
}