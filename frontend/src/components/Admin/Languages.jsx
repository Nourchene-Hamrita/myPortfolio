import React, { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { addLanguage, deleteLanguage, getUser } from "../../actions/user";
import { MdKeyboardBackspace } from "react-icons/md";
import { Button, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "../Home/Home.css";


export const LanguageCard = ({
    title,
    percent,
    isAdmin = false,
    id,
}) => {
    const dispatch = useDispatch();

    const deleteHandler = async (id) => {
        await dispatch(deleteLanguage(id));
        dispatch(getUser());
    };


    return (
        <>

            <div style={{ width: '50%', display: 'flex', boxSizing: 'border-box', boxShadow: '0 0 10px rgb(0, 0, 0)', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>

                <Typography variant="h5">{title}</Typography>
                <Typography variant="h4">{percent}</Typography>


                {isAdmin && (
                    <Button
                        style={{ color: "rgba(40,40,40,0.7)" }}
                        onClick={() => deleteHandler(id)}
                    >
                        <Delete />
                    </Button>
                )}
            </div>
        </>
    );
};
const Languages = () => {

    const { message, error, loading } = useSelector((state) => state.update);
    const { message: loginMessage } = useSelector((state) => state.login);

    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const alert = useAlert();

    const [title, setTitle] = useState("");
    const [percent, setPercent] = useState();


    const submitHandler = async (e) => {
        e.preventDefault();
        await dispatch(addLanguage(title, percent));
        dispatch(getUser());
    };

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch({ type: "CLEAR_ERRORS" });
        }
        if (message) {
            alert.success(message);
            dispatch({ type: "CLEAR_MESSAGE" });
        }
        if (loginMessage) {
            alert.success(loginMessage);
            dispatch({ type: "CLEAR_MESSAGE" });
        }
    }, [alert, error, message, dispatch, loginMessage]);

    return (
        <div className="adminPanel">
            <div className="adminPanelContainer">
                <Typography variant="h4">
                    <p>A</p>
                    <p>D</p>
                    <p>M</p>
                    <p>I</p>
                    <p style={{ marginRight: "1vmax" }}>N</p>

                    <p>P</p>
                    <p>A</p>
                    <p>N</p>
                    <p>E</p>
                    <p>L</p>
                </Typography>

                <form onSubmit={submitHandler}>
                    <input
                        type="text"
                        placeholder="Language"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="adminPanelInputs"
                    />
                    <input
                        type="text"
                        placeholder="Percent"
                        value={percent}
                        onChange={(e) => setPercent(e.target.value)}
                        className="adminPanelInputs"
                    />




                    <Link to="/account">
                        BACK <MdKeyboardBackspace />
                    </Link>

                    <Button type="submit" variant="contained" disabled={loading}>
                        Add
                    </Button>
                </form>
                <div >
                    {user &&
                        user.languages &&
                        user.languages.map((item) => (
                            <LanguageCard
                                id={item._id}
                                key={item._id}
                                title={item.title}
                                percent={item.percent}
                                isAdmin={true}
                            />
                        ))}
                </div>


            </div>
        </div>
    );
};

export default Languages;