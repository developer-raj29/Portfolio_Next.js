"use client";
import React, { useEffect, useState } from 'react'
import Loading from "../components/Sub_Component/Loading"

const ClientWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return loading ? <Loading /> : <>{children}</>;
};

export default ClientWrapper

