import { FC } from "react";
import Counter from "../components/Counter";

const Home: FC = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to the home page</p>

            <Counter />
        </div>
    );
};

export default Home;