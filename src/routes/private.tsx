import React, { Component, useState } from "react";
import { Navigate } from "react-router-dom";

const useAuth = () => {
  const token = localStorage.getItem("token");

  return token;
};

export const PrivateRoute = ({ children }: { children: any }) => {
  const auth = useAuth();
  return auth ? children : <Navigate to="/login" />;
};
