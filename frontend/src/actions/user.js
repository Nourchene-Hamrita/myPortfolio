import axios from "axios";

export const getUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "GET_USER_REQUEST",
    });

    const { data } = await axios.get("/api/v1/user");

    dispatch({
      type: "GET_USER_SUCCESS",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "GET_USER_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "LOGIN_REQUEST",
    });

    const { data } = await axios.post(
      "/api/v1/login",
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "LOGIN_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "LOGIN_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOGOUT_REQUEST",
    });

    const { data } = await axios.get("/api/v1/logout");

    dispatch({
      type: "LOGOUT_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "LOGOUT_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOAD_USER_REQUEST",
    });

    const { data } = await axios.get("/api/v1/me");

    dispatch({
      type: "LOAD_USER_SUCCESS",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "LOAD_USER_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const updateUser =
  (name,address,phone, email, password, skills, about,interest) => async (dispatch) => {
    try {
      dispatch({
        type: "UPDATE_USER_REQUEST",
      });

      const { data } = await axios.put(
        "/api/v1/admin/update",
        {
          name,
          address,
          phone,
          email,
          password,
          skills,
          about,
          interest,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dispatch({
        type: "UPDATE_USER_SUCCESS",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "UPDATE_USER_FAILURE",
        payload: error.response.data.message,
      });
    }
  };

export const addTimeline = (title, description, date) => async (dispatch) => {
  try {
    dispatch({
      type: "ADD_TIMELINE_REQUEST",
    });

    const { data } = await axios.post(
      "/api/v1/admin/timeline/add",
      {
        title,
        description,
        date,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "ADD_TIMELINE_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "ADD_TIMELINE_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const deleteTimeline = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DELETE_TIMELINE_REQUEST",
    });

    const { data } = await axios.delete(`/api/v1/admin/timeline/${id}`);

    dispatch({
      type: "DELETE_TIMELINE_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_TIMELINE_FAILURE",
      payload: error.response.data.message,
    });
  }
};
export const addExperience = (title,job, description, date,image) => async (dispatch) => {
  try {
    dispatch({
      type: "ADD_EXPERIENCE_REQUEST",
    });

    const { data } = await axios.post(
      "/api/v1/admin/experience/add",
      {
        title,
        job,
        description,
        date,
        image
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "ADD_EXPERIENCE_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "ADD_EXPERIENCE_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const deleteExperience = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DELETE_EXPERIENCE_REQUEST",
    });

    const { data } = await axios.delete(`/api/v1/admin/experience/${id}`);

    dispatch({
      type: "DELETE_EXPERIENCE_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_EXPERIENCE_FAILURE",
      payload: error.response.data.message,
    });
  }
};
export const addYoutube = (title, url, image) => async (dispatch) => {
  try {
    dispatch({
      type: "ADD_YOUTUBE_REQUEST",
    });

    const { data } = await axios.post(
      "/api/v1/admin/youtube/add",
      { title, url, image },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "ADD_YOUTUBE_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "ADD_YOUTUBE_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const deleteYoutube = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DELETE_YOUTUBE_REQUEST",
    });

    const { data } = await axios.delete(`/api/v1/admin/youtube/${id}`);

    dispatch({
      type: "DELETE_YOUTUBE_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_YOUTUBE_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const addProject =
  (title, url, image, description, techStack) => async (dispatch) => {
    try {
      dispatch({
        type: "ADD_PROJECT_REQUEST",
      });

      const { data } = await axios.post(
        "/api/v1/admin/project/add",
        { title, url, image, description, techStack },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dispatch({
        type: "ADD_PROJECT_SUCCESS",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "ADD_PROJECT_FAILURE",
        payload: error.response.data.message,
      });
    }
  };

export const deleteProject = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DELETE_PROJECT_REQUEST",
    });

    const { data } = await axios.delete(`/api/v1/admin/project/${id}`);

    dispatch({
      type: "DELETE_PROJECT_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_PROJECT_FAILURE",
      payload: error.response.data.message,
    });
  }
};
export const addSkill =
  (name,percent) => async (dispatch) => {
    try {
      dispatch({
        type: "ADD_SKILL_REQUEST",
      });

      const { data } = await axios.post(
        "/api/v1/admin/skill/add",
        {name,percent },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dispatch({
        type: "ADD_SKILL_SUCCESS",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "ADD_SKILL_FAILURE",
        payload: error.response.data.message,
      });
    }
  };
  export const deleteSkill = (id) => async (dispatch) => {
    try {
      dispatch({
        type: "DELETE_SKILL_REQUEST",
      });
  
      const { data } = await axios.delete(`/api/v1/admin/skill/${id}`);
  
      dispatch({
        type: "DELETE_SILL_SUCCESS",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "DELETE_SKILL_FAILURE",
        payload: error.response.data.message,
      });
    }
  };

  export const addLanguage =
  (title,percent) => async (dispatch) => {
    try {
      dispatch({
        type: "ADD_LANGUAGE_REQUEST",
      });

      const { data } = await axios.post(
        "/api/v1/admin/language/add",
        {title,percent },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dispatch({
        type: "ADD_LANGUAGE_SUCCESS",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "ADD_LANGUAGE_FAILURE",
        payload: error.response.data.message,
      });
    }
  };
  export const deleteLanguage = (id) => async (dispatch) => {
    try {
      dispatch({
        type: "DELETE_LANGUAGE_REQUEST",
      });
  
      const { data } = await axios.delete(`/api/v1/admin/language/${id}`);
  
      dispatch({
        type: "DELETE_LANGUAGE_SUCCESS",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "DELETE_LANGUAGE_FAILURE",
        payload: error.response.data.message,
      });
    }
  };

export const contactUs = (name, email, message) => async (dispatch) => {
  try {
    dispatch({
      type: "CONTACT_US_REQUEST",
    });

    const { data } = await axios.post(
      "/api/v1/contact",
      { name, email, message },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "CONTACT_US_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "CONTACT_US_FAILURE",
      payload: error.response.data.message,
    });
  }
};