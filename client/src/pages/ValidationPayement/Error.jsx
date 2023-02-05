import {Link} from "react-router-dom";

function Error() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-bold text-red-500">Erreur de paiement</h2>
        <p className="text-lg text-gray-500">Votre paiement n'a pas été validé</p>
        <Link to="/" className="text-lg text-blue-500">Retour à l'accueil</Link>
    </div>
  );
}

export default Error;