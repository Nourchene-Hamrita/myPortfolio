import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  name: String,
  address: String,
  phone: String,
  email: {
    type: String,
    unique: true,
    required: [true, "Please Enter Email"],
  },
  password: {
    type: String,
    required: [true, "Please Enter Password"],
    select: false,
  },

  timeline: [
    {
      title: String,
      description: String,
      date: Date,
    },
  ],
  languages: [
    {
      title: String,
      percent: Number
    },
  ],
  experience: [
    {
      title: String,
      job: String,
      description: String,
      date: Date,
      image: {
        public_id: String,
        url: String,
      },
    },
  ],

  skills: {

    image1: {
      public_id: String,
      url: String,
    },

    image2: {
      public_id: String,
      url: String,
    },
    image3: {
      public_id: String,
      url: String,
    },
    image4: {
      public_id: String,
      url: String,
    },
    image5: {
      public_id: String,
      url: String,
    },
    image6: {
      public_id: String,
      url: String,
    },
  },

  youtube: [
    {
      url: String,
      title: String,
      image: {
        public_id: String,
        url: String,
      },
    },
  ],
  mainSkills: [
    {
      name: String,
      percent: Number,
    },
  ],


  projects: [
    {
      url: String,
      title: String,
      image: {
        public_id: String,
        url: String,
      },
      description: String,
      techStack: String,
    },
  ],

  about: {
    name: String,
    title: String,
    subtitle: String,
    description: String,
    quote: String,
    avatar: {
      public_id: String,
      url: String,
    },
  },
  interest: {

    title1: String,
    title2: String,
    title3: String,

  },
});
/*userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});*/

export const User = mongoose.model("User", userSchema); 