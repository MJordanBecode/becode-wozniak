
CREATE TABLE client
(
  id_client      INT         NOT NULL AUTO_INCREMENT,
  firstName      VARCHAR(50) NOT NULL,
  lastName       VARCHAR(50) NOT NULL,
  email          VARCHAR(50) NOT NULL,
  phoneNumber    INTEGER     NOT NULL,
  reservation_id INT         NOT NULL,
  PRIMARY KEY (id_client)
);

ALTER TABLE client
  ADD CONSTRAINT UQ_id_client UNIQUE (id_client);

ALTER TABLE client
  ADD CONSTRAINT UQ_email UNIQUE (email);

ALTER TABLE client
  ADD CONSTRAINT UQ_phoneNumber UNIQUE (phoneNumber);

ALTER TABLE client
  ADD CONSTRAINT UQ_reservation_id UNIQUE (reservation_id);

CREATE TABLE host
(
  host_id       INT         NOT NULL AUTO_INCREMENT,
  host_category VARCHAR(50) NULL    ,
  town_name     VARCHAR(50) NULL    ,
  land_name     VARCHAR(50) NULL    ,
  touristic_id  INT         NOT NULL,
  PRIMARY KEY (host_id)
);

ALTER TABLE host
  ADD CONSTRAINT UQ_host_id UNIQUE (host_id);

CREATE TABLE payement
(
  payement_id   INT         NOT NULL AUTO_INCREMENT,
  payement_type VARCHAR(50) NOT NULL,
  price         INTEGER     NOT NULL,
  PRIMARY KEY (payement_id)
);

ALTER TABLE payement
  ADD CONSTRAINT UQ_payement_id UNIQUE (payement_id);

CREATE TABLE reservation
(
  reservation_id   INT      NOT NULL AUTO_INCREMENT,
  reservation_date DATETIME NOT NULL,
  status           BOOLEAN  NULL    ,
  payement_id      INT      NOT NULL,
  travel_id        INT      NOT NULL,
  PRIMARY KEY (reservation_id)
);

ALTER TABLE reservation
  ADD CONSTRAINT UQ_reservation_id UNIQUE (reservation_id);

CREATE TABLE touristic_guide
(
  touristic_id        INT         NOT NULL AUTO_INCREMENT,
  contact_name        VARCHAR(50) NOT NULL,
  contact_phoneNumber BIGINT      NOT NULL,
  PRIMARY KEY (touristic_id)
);

ALTER TABLE touristic_guide
  ADD CONSTRAINT UQ_touristic_id UNIQUE (touristic_id);

CREATE TABLE transport
(
  transport_id INT     NOT NULL AUTO_INCREMENT,
  number_place INTEGER NOT NULL,
  company_id   INT     NOT NULL,
  PRIMARY KEY (transport_id)
);

ALTER TABLE transport
  ADD CONSTRAINT UQ_transport_id UNIQUE (transport_id);

CREATE TABLE transport_campany
(
  company_id   INT         NOT NULL AUTO_INCREMENT,
  company_name VARCHAR(50) NOT NULL,
  company_type VARCHAR(50) NOT NULL,
  PRIMARY KEY (company_id)
);

ALTER TABLE transport_campany
  ADD CONSTRAINT UQ_company_id UNIQUE (company_id);

ALTER TABLE transport_campany
  ADD CONSTRAINT UQ_company_name UNIQUE (company_name);

CREATE TABLE travel
(
  travel_id         INT         NOT NULL AUTO_INCREMENT,
  destination       VARCHAR(50) NOT NULL,
  limit_place       INT         NOT NULL,
  total_inscription INT         NOT NULL,
  transport_id      INT         NOT NULL,
  host_id           INT         NOT NULL,
  PRIMARY KEY (travel_id)
);

ALTER TABLE travel
  ADD CONSTRAINT UQ_travel_id UNIQUE (travel_id);

ALTER TABLE client
  ADD CONSTRAINT FK_reservation_TO_client
    FOREIGN KEY (reservation_id)
    REFERENCES reservation (reservation_id);

ALTER TABLE reservation
  ADD CONSTRAINT FK_payement_TO_reservation
    FOREIGN KEY (payement_id)
    REFERENCES payement (payement_id);

ALTER TABLE host
  ADD CONSTRAINT FK_touristic_guide_TO_host
    FOREIGN KEY (touristic_id)
    REFERENCES touristic_guide (touristic_id);

ALTER TABLE travel
  ADD CONSTRAINT FK_transport_TO_travel
    FOREIGN KEY (transport_id)
    REFERENCES transport (transport_id);

ALTER TABLE transport
  ADD CONSTRAINT FK_transport_campany_TO_transport
    FOREIGN KEY (company_id)
    REFERENCES transport_campany (company_id);

ALTER TABLE reservation
  ADD CONSTRAINT FK_travel_TO_reservation
    FOREIGN KEY (travel_id)
    REFERENCES travel (travel_id);

ALTER TABLE travel
  ADD CONSTRAINT FK_host_TO_travel
    FOREIGN KEY (host_id)
    REFERENCES host (host_id);


-- data : 
-- Insertion dans la table payement
INSERT INTO payement (payement_type, price) 
VALUES 
('Carte de crédit', 150),
('Espèces', 100),
('Carte de débit', 200),
('PayPal', 180),
('Chèque', 120);

-- Insertion dans la table touristic_guide
INSERT INTO touristic_guide (contact_name, contact_phoneNumber)
VALUES 
('Pierre Dupont', 612345678),
('Marie Curie', 623456789),
('Jean Martin', 634567890),
('Alice Lemoine', 645678901),
('Thomas Lefevre', 656789012);

-- Insertion dans la table transport_campany
INSERT INTO transport_campany (company_name, company_type)
VALUES 
('Transports Global', 'Autocars'),
('Voyages Express', 'Autocars'),
('Airline Ltd', 'Avion'),
('Oceanic Travels', 'Bateaux'),
('Rapid Travel', 'Autocars');

-- Insertion dans la table transport
INSERT INTO transport (number_place, company_id)
VALUES 
(50, 1),
(40, 2),
(200, 3),
(100, 4),
(60, 5);

-- Insertion dans la table host
INSERT INTO host (host_category, town_name, land_name, touristic_id)
VALUES 
('Hôtel', 'Paris', 'France', 1),
('Maison d’hôte', 'Nice', 'France', 2),
('Resort', 'Rome', 'Italie', 3),
('Camping', 'Madrid', 'Espagne', 4),
('Hôtel', 'Londres', 'Royaume-Uni', 5);

-- Insertion dans la table travel
INSERT INTO travel (destination, limit_place, total_inscription, transport_id, host_id)
VALUES 
('Paris', 30, 25, 1, 1),
('Nice', 40, 35, 2, 2),
('Rome', 50, 45, 3, 3),
('Madrid', 25, 20, 4, 4),
('Londres', 60, 55, 5, 5);

-- Insertion dans la table reservation
INSERT INTO reservation (reservation_date, status, payement_id, travel_id)
VALUES 
('2025-04-15 10:00:00', TRUE, 1, 1),
('2025-04-16 12:00:00', FALSE, 2, 2),
('2025-04-17 14:00:00', TRUE, 3, 3),
('2025-04-18 16:00:00', TRUE, 4, 4),
('2025-04-19 18:00:00', FALSE, 5, 5);

-- Insertion dans la table client
INSERT INTO client (firstName, lastName, email, phoneNumber, reservation_id)
VALUES 
('Alice', 'Durand', 'alice.durand@example.com', 612345678, 1),
('Bob', 'Martin', 'bob.martin@example.com', 623456789, 2),
('Clara', 'Lemoine', 'clara.lemoine@example.com', 634567890, 3),
('David', 'Lefevre', 'david.lefevre@example.com', 645678901, 4),
('Eve', 'Roux', 'eve.roux@example.com', 656789012, 5);

-- Insertion dans la table host (modification du touristic_guide)
INSERT INTO host (host_category, town_name, land_name, touristic_id)
VALUES 
('Hôtel', 'Paris', 'France', 1),
('Maison d’hôte', 'Nice', 'France', 2),
('Resort', 'Rome', 'Italie', 3),
('Camping', 'Madrid', 'Espagne', 4),
('Hôtel', 'Londres', 'Royaume-Uni', 5);

-- Insertion dans la table touristic_guide (les contacts peuvent aussi être modifiés)
INSERT INTO touristic_guide (contact_name, contact_phoneNumber)
VALUES 
('Pierre Dupont', 612345678),
('Marie Curie', 623456789),
('Jean Martin', 634567890),
('Alice Lemoine', 645678901),
('Thomas Lefevre', 656789012);



-- READ : 

SELECT 
  travel.travel_id, 
  host.host_category, 
  host.town_name, 
  host.land_name, 
  payement.payement_type, 
  payement.price,
  transport.number_place,
  transport_campany.company_name,
  transport_campany.company_type
FROM travel
INNER JOIN host ON travel.host_id = host.host_id
INNER JOIN reservation ON travel.travel_id = reservation.travel_id
INNER JOIN payement ON reservation.payement_id = payement.payement_id
INNER JOIN transport ON travel.transport_id = transport.transport_id
INNER JOIN transport_campany ON transport.company_id = transport_campany.company_id;


  -- client information : 
  SELECT client.firstName,
  client.lastName,
  client.email,
  client.phoneNumber,
  reservation.reservation_date, reservation.`status`,  
  payement.payement_type, 
  payement.price
  FROM client
  INNER JOIN reservation ON client.id_client = reservation.reservation_id
  INNER JOIN payement ON reservation.reservation_id = payement.payement_id
  ;
-- Transport information :
SELECT 
  travel.travel_id,
  travel.destination,
  travel.limit_place,
  travel.total_inscription,
  transport.transport_id,
  transport.number_place,
  transport_campany.company_name,
  transport_campany.company_type
  FROM transport
  INNER JOIN transport_campany ON transport.company_id = transport_campany.company_id
  INNER JOIN travel ON transport.transport_id = travel.transport_id 
  ;

  -- Consulter les informations d'une entreprise de transport + services associés
  SELECT transport_campany.company_name,
  transport_campany.company_type,
  transport.transport_id,
  transport.number_place
   FROM transport
   INNER JOIN transport_campany ON transport.company_id = transport_campany.company_id;

  -- 3.3 
    -- modifier client
       UPDATE client
        SET firstName = 'Jordan',
         lastName = 'Masy', 
         email = 'masyjordan@gmail.com'
       WHERE id_client = 2 
       
    -- reservation : 
      UPDATE reservation 
        SET status = 1
      WHERE reservation_id = 2;

    -- voyage (prix, nombre de places disponible)
      UPDATE travel
        SET limit_place = 150, 
        total_inscription = 148
        WHERE travel_id = 1;
  -- 3.4 
    -- supprimer une réservation + gestions des contraintes si nécessaires 
      DELETE FROM reservation
      WHERE reservation_id = 2;

      -- supprimer un mode de paiement
      DELETE FROM payement
      WHERE payement_type = 'Chèque';
      -- supprimer un transport qui n'est plus disponible
        -- drop de la contrainte FK pour lui rajouter le ON DELETE CASCADE
        ALTER TABLE transport
        DROP FOREIGN KEY FK_transport_campany_TO_transport;

        ALTER TABLE transport
        ADD CONSTRAINT FK_transport_campany_TO_transport
        FOREIGN KEY (company_id)
        REFERENCES transport_campany (company_id)
        ON DELETE CASCADE;


-- 4.0 
-- 4.1
/*
Exercice 1 : Afficher toutes les sociétés qui proposent des avions
📌 Objectif : Trouver les entreprises (company) qui ont au moins un transport de type Avion.
*/
SELECT transport.number_place, 
transport.transport_id,
transport_campany.company_name,
transport_campany.company_type
FROM transport_campany
INNER JOIN transport ON transport.transport_id = transport_campany.company_id
WHERE company_type = 'Avion';

/*
Exercice 2 : Lister les transports avec leur société
📌 Objectif : Afficher tous les transports (transport), en affichant le nom de la société correspondante.
*/
SELECT  
transport_campany.company_name,
transport_campany.company_type
FROM transport_campany
INNER JOIN transport ON transport.transport_id = transport_campany.company_id;

/*
 Exercice 3 : Trouver les transports ayant plus de 200 places
📌 Objectif : Afficher tous les transports qui ont plus de 200 places (TotalSeats).
*/
SELECT transport.number_place, 
transport.transport_id,
transport_campany.company_name,
transport_campany.company_type
FROM transport_campany
INNER JOIN transport ON transport.transport_id = transport_campany.company_id
WHERE number_place > 200;
/*
Exercice 4 : Afficher les hébergements et leur type de contact principal
📌 Objectif : Associer les hébergements (hebergement) avec le type de contact principal
*/

/* 
Exercice 5 : Trouver les contacts des hébergements en Suisse
📌 Objectif : Afficher les contacts (contact) associés à un hébergement situé en Suisse.e).
*/

/* 
Exercice 6 : Créer un voyage en Belgique (3 jours à Plopsaland) avec un nombre limité de 50 places.
📌 Objectif : Créer un voyage en Belgique, Trouver le moyen de transport, l'herbergement et le contact.
*/

/* 
Exercice 7 : Ajouter un client à ce voyage
📌 Objectif : Ajouter plusieurs clients, payment ....
*/
