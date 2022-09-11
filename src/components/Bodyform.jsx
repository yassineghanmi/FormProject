import React from "react";
import Countryselector from "./Countryselector";
import axios from "axios";

import { useState } from "react";
function Bodyform() {
  const [nom, setNom] = useState("");
  const [adresse, setAdresse] = useState("");
  const [ville, setVille] = useState("");
  const [pays, setPays] = useState("");
  const [telephone, setTelephone] = useState(null);
  const [post, setPost] = useState(null);
  const [deb, setDeb] = useState("");
  const formData = {
    nom,
    addresse: adresse,
    ville,
    pays,
    telephone,
    post,
    debut_de_contract: deb,
  };
  const onSubmitForm = () => {
    axios
      .post("http://localhost:8080/addContact", formData)
      .then((response) => console.log(response));
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitForm();
        }}
      >
        <div className="container ">
          <div className="row py-2">
            <div className="col">
              <label className="form-label  fw-bold">Nom:</label>
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Nom"
                required
                value={nom}
                onChange={(e) => setNom(e.target.value)}
              />
            </div>
          </div>
          <div className="row py-2">
            <div className="col">
              <label className="form-label fw-bold">Adresse:</label>
            </div>
            <div className="col">
              <input
                value={adresse}
                onChange={(e) => setAdresse(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Adresse"
                required
              />
            </div>
          </div>
          <div className="row py-2">
            <div className="col">
              <label className="form-label fw-bold">Ville:</label>
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Ville"
                value={ville}
                onChange={(e) => setVille(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="row py-2">
            <div className="col">
              <label className="form-label fw-bold">Pays:</label>
            </div>
            <Countryselector pay={setPays} />
          </div>
          <div className="row py-2">
            <div className="col">
              <label className="form-label fw-bold">Telephone:</label>
            </div>
            <div className="col">
              <input
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Telephone"
                required
              />
            </div>
            <div className="col">
              <label className="form-label fw-bold">Post:</label>
            </div>
            <div className="col">
              <input
                value={post}
                onChange={(e) => setPost(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Post code"
                required
              />
            </div>
          </div>

          <div className="row py-2">
            <div className="col">
              <label className="form-label fw-bold">Debut contrat:</label>
            </div>
            <div className="col">
              <input
                value={deb}
                onChange={(e) => setDeb(e.target.value)}
                id="startDate"
                className="form-control"
                type="date"
                required
              />
            </div>
          </div>
          <div className="row py-2">
            <div className="d-flex justify-content-center">
              <button
                type="reset"
                className="btn btn-outline-dark btn-md p-2 m-2"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="btn btn-outline-dark btn-md p-2 m-2"
              >
                Confirmer
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Bodyform;
