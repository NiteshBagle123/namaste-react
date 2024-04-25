import { useRouteError } from 'react-router-dom';

export const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>Oops Error</h1>
            <h3>Error code: {err.status}</h3>
            <h3>Error message: {err.data}</h3>
        </div>
    )
}