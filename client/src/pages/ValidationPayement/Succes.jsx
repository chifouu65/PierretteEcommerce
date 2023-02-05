import {Link} from "react-router-dom";

function Succes() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-2xl font-bold text-green-500">Paiement validé</h2>
            <p className="text-lg text-gray-500">Votre paiement a bien été validé</p>
            <Link to="/" className="text-lg text-blue-500">Retour à l'accueil</Link>
        </div>
    );
}

export default Succes;