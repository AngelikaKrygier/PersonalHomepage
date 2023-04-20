import { useDispatch } from "react-redux";
import { Wrapper, Button } from "./styled";
import { toggleTheme } from "./themeSlice";

export const SwitchTheme = () => {
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <Button
                onClick={() => dispatch(toggleTheme())}
            >Zmień motyw
            </Button>
        </Wrapper>
    )
};