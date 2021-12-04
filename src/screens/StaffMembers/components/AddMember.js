import React, { useState, useEffect } from "react";

import Navbar from "../../../layout/Navbar";

import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function AddMember() {
  //////////////////////////////////////////////////////////////////////////////
  //
  //      I -  CONSTANTS
  //
  //////////////////////////////////////////////////////////////////////////////

  const addMemberState = useSelector((state) => state.addMember);
  const roles = addMemberState.roles;
  const formContent = addMemberState.formContent;
  const currentError = addMemberState.currentError;
  const formSuccess = addMemberState.formSuccess;
  const dispatch = useDispatch();
  const history = useHistory();

  //////////////////////////////////////////////////////////////////////////////
  //
  //      II -  API CALLS
  //
  //////////////////////////////////////////////////////////////////////////////

  const getToken = () => {
    axios
      .get("/api/staff_member/get_csrf_token")
      .then((res) => {
        let data = res.data;
        if (data.status === "OK") {
          dispatch({
            type: "SET_FORM_CONTENT",
            payload: {
              ...formContent,
              _token: data.token,
            },
          });
        } else {
          dispatch({
            type: "SET_CURRENT_ERROR",
            payload: data.err,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addMember = (params) => {
    axios
      .post("/api/staff_member/add", params)
      .then((res) => {
        let data = res.data;
        if (data.status === "OK") {
          dispatch({
            type: "SET_FORM_SUCCESS",
            payload: true,
          });
          dispatch({
            type: "RESET_ALL",
          });
        } else {
          dispatch({
            type: "SET_CURRENT_ERROR",
            payload: data.err,
          });
        }
      })
      .catch((error) => {
        console.log("Error - " + error);
      });
  };

  const HANDLE_AddNewMember = () => {
    dispatch({
      type: "SET_FORM_CONTENT",
      payload: {
        ...formContent,
        _email: null,
        _password: null,
        _name: null,
        _phone: null,
        _role: null,
      },
    });
    dispatch({
      type: "SET_CURRENT_ERROR",
      payload: null,
    });
    dispatch({
      type: "SET_FORM_SUCCESS",
      payload: false,
    });

    getToken();
  };

  const HANDLE_BackToHome = () => {
    dispatch({
      type: "SET_FORM_CONTENT",
      payload: {
        _token: null,
        _email: null,
        _password: null,
        _name: null,
        _phone: null,
        _role: null,
      },
    });
    dispatch({
      type: "SET_CURRENT_ERROR",
      payload: null,
    });
    dispatch({
      type: "SET_FORM_SUCCESS",
      payload: false,
    });

    history.replace("/");
  };

  //////////////////////////////////////////////////////////////////////////////
  //
  //      III -  HOOKS
  //
  //////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    console.log(currentError);
  }, [currentError]);

  useEffect(() => {
    getToken();
  }, []);

  //////////////////////////////////////////////////////////////////////////////
  //
  //      IV -  RENDER
  //
  //////////////////////////////////////////////////////////////////////////////
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h1 className="my-5 text-center">Ajouter un membre du staff</h1>
            <hr />

            {formSuccess && (
              <>
                <div className="border border-success alert-success p-5 h4 text-center">
                  L'utilisateur a été ajouté avec succès !
                </div>
                <div className="h4 my-5 text-center">
                  <div className="my-4">
                    Souhaitez-vous ajouter un nouvel utilisateur ?
                  </div>
                  <button
                    onClick={HANDLE_AddNewMember}
                    className="btn btn-lg btn-success me-3 p-3 px-5"
                  >
                    Oui
                  </button>
                  <button
                    onClick={HANDLE_BackToHome}
                    className="btn btn-lg btn-danger ms-3 p-3 px-5"
                  >
                    Non
                  </button>
                </div>
              </>
            )}

            {formSuccess != true && (
              <form
                action=""
                className=" border bg-light p-3 p-md-4 mb-5"
                onSubmit={(evt) => {
                  evt.preventDefault();
                  console.log(formContent);
                  addMember(formContent);
                }}
              >
                <div className="form-group mb-3">
                  <label htmlFor="" className="form-label">
                    Nom
                  </label>
                  <input
                    type="text"
                    className={
                      "form-control " +
                      (currentError === "ERR_INPUT_NAME" && "is-invalid")
                    }
                    value={formContent["name"]}
                    onChange={(evt) => {
                      dispatch({
                        type: "SET_FORM_CONTENT",
                        payload: {
                          ...formContent,
                          _name: evt.target.value,
                        },
                      });
                    }}
                  />
                  <div className="invalid-feedback">Le nom est incorrect</div>
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="" className="form-label">
                    N° de Tel.
                  </label>
                  <input
                    type="text"
                    className={
                      "form-control " +
                      (currentError === "ERR_INPUT_PHONE" && "is-invalid")
                    }
                    onChange={(evt) => {
                      dispatch({
                        type: "SET_FORM_CONTENT",
                        payload: {
                          ...formContent,
                          _phone: evt.target.value,
                        },
                      });
                    }}
                  />
                  <div className="invalid-feedback">
                    Le numéro de téléphone est incorrect
                  </div>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="" className="form-label">
                    E-mail
                  </label>
                  <input
                    type="text"
                    className={
                      "form-control " +
                      ((currentError === "ERR_INPUT_EMAIL" ||
                        currentError === "ERR_EXISTING_USER") &&
                        "is-invalid")
                    }
                    onChange={(evt) => {
                      dispatch({
                        type: "SET_FORM_CONTENT",
                        payload: {
                          ...formContent,
                          _email: evt.target.value,
                        },
                      });
                    }}
                  />
                  {currentError === "ERR_INPUT_EMAIL" && (
                    <div className="invalid-feedback">
                      L'adresse e-mail est incorrecte
                    </div>
                  )}
                  {currentError === "ERR_EXISTING_USER" && (
                    <div className="invalid-feedback">
                      Cette adresse e-mail est déjà utilisée pour un autre
                      utilisateur
                    </div>
                  )}
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="" className="form-label">
                    Mot de passe
                  </label>
                  <input
                    type="text"
                    className={
                      "form-control " +
                      (currentError === "ERR_INPUT_PASSWORD" && "is-invalid")
                    }
                    onChange={(evt) => {
                      dispatch({
                        type: "SET_FORM_CONTENT",
                        payload: {
                          ...formContent,
                          _password: evt.target.value,
                        },
                      });
                    }}
                  />
                  <div className="invalid-feedback">
                    Le mot de passe doit contenir au moins 8 caractères
                  </div>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="" className="form-label">
                    Rôles
                    {currentError === "ERR_INPUT_ROLE" && (
                      <>
                        <br />
                        <small className="text-danger">
                          Vous devez choisir un rôle
                        </small>
                      </>
                    )}
                  </label>

                  {roles.map((item, index) => {
                    return (
                      <div className="form-check mb-2" key={index}>
                        <input
                          className="form-check-input"
                          type="radio"
                          value={item.value}
                          id={"flexCheckDefault" + index}
                          name="role"
                          onChange={(evt) => {
                            dispatch({
                              type: "SET_FORM_CONTENT",
                              payload: {
                                ...formContent,
                                _role: evt.target.value,
                              },
                            });
                          }}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={"flexCheckDefault" + index}
                        >
                          {item.name}
                        </label>
                      </div>
                    );
                  })}
                </div>
                <div className="form-group text-center">
                  <button className="btn btn-primary py-3 px-5">
                    Enregistrer
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default AddMember;
