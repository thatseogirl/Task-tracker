import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function About() {
    const navigate = useNavigate();
    return (
        <div>
            <h4>Add all appointments and set a reminder</h4>
            <Button
                text='Go Back'
                color='grey'
                onClick={() => navigate("/")}
            ></Button>
        </div>
    );
}
