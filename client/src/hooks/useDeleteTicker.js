import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

export const useDeleteTicker = () => {
  const [deleteSuccess, setDeleteSuccess] = useState(null);
  const [deleteError, setDeleteError] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const { user } = useAuthContext();

  const deleteTicker = async (id) => {
    setDeleteLoading(true);
    setDeleteSuccess(null);
    setDeleteError(null);

    const req = `/api/watchlist/${id}`;
    const res = await fetch(req, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const data = await res.json();

    if (!res.ok) {
      setDeleteLoading(false);
      setDeleteSuccess(null);
      setDeleteError(data.error);
    } else {
      setDeleteLoading(false);
      setDeleteSuccess("Ticker removed");
      setDeleteError(null);
    }
  };

  return {
    deleteTicker,
    deleteSuccess,
    setDeleteSuccess,
    deleteError,
    setDeleteError,
    deleteLoading,
    setDeleteLoading,
  };
};
