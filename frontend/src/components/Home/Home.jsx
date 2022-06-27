import React, { useEffect } from "react";
import "./Home.css";
import * as THREE from "three";
import moonImage from "../../images/moon.jpg";
import venusImage from "../../images/venus.jpg";
import uranusImage from "../../images/uranus.jpg";
import spaceImage from "../../images/space.jpg";
import MyAvatar from "../../images/me.png"
import { Typography } from "@mui/material";
import TimeLine from "../TimeLine/TimeLine";
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";
import { AnimatedLineProgressBar } from '@frogress/line';
import {
    SiJava,
    SiReact,
    SiJavascript,
    SiMongodb,
    SiNodedotjs,
    SiExpress,
    SiCss3,
    SiHtml5,
    SiThreedotjs,
    SiCsharp,
    SiPython,
    SiUnity,
    SiMysql,
} from "react-icons/si";
import { DiAndroid } from "react-icons/di";
import { GiGraduateCap } from 'react-icons/gi'
import { MdWork, MdSettingsSuggest, MdOutlineCode } from 'react-icons/md'
import { GiGrandPiano } from 'react-icons/gi';
import { IoLanguage, IoHeart } from 'react-icons/io5';
import { FaPaintBrush, FaBookReader } from 'react-icons/fa';
import YoutubeCard from "../YoutubeCard/YoutubeCard";
import { Link } from "react-router-dom";
import { MouseOutlined } from "@mui/icons-material";
import Experience from "../Experience/Experience";
import ScrollReveal from 'scrollreveal'

const Home = ({ timelines, experiences, youtubes, skills, mainSkills, languages, interest }) => {

    /*const examples = [
        {
            percent: 75,
            linearGradient: ["#008b87", "#62fffb"],
            fontColor: "#fff",
            styles: {
                borderRadius: "50%",
                boxShadow: "inset 0 0 25px 10px #a2caff"
            }
        },
        {
            percent: 75,
            linearGradient: ["#008b87", "#62fffb"],
            fontColor: "#fff",
            styles: {
                borderRadius: "50%",
                boxShadow: "inset 0 0 25px 10px #a2caff"
            }
        },
    ];*/



    useEffect(() => {
        /* // Setup
 
         const scene = new THREE.Scene();
 
         const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
         const canvas = document.querySelector(".homeCanvas");
         const renderer = new THREE.WebGLRenderer({ canvas });
 
         renderer.setPixelRatio(window.devicePixelRatio);
         renderer.setSize(window.innerWidth, window.innerHeight);
         camera.position.set(4, 4, 8);
  
 
         renderer.render(scene, camera);
 
         // Torus
         const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
         const material = new THREE.MeshStandardMaterial({ color: 0x1cbbb4 });
         const torus = new THREE.Mesh(geometry, material);
 
         scene.add(torus);
 
         // Lights
 
         const pointLight = new THREE.PointLight(0xffffff);
         pointLight.position.set(5, 5, 5);
 
         const ambientLight = new THREE.AmbientLight(0xffffff);
         scene.add(pointLight, ambientLight);
 
         // Helpers
 
         // const lightHelper = new THREE.PointLightHelper(pointLight)
         // const gridHelper = new THREE.GridHelper(200, 50);
         // scene.add(lightHelper, gridHelper)
 
         // const controls = new OrbitControls(camera, renderer.domElement);
 
         function addStar() {
             const geometry = new THREE.SphereGeometry(0.25, 24, 24);
             const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
             const star = new THREE.Mesh(geometry, material);
 
             const [x, y, z] = Array(3)
                 .fill()
                 .map(() => THREE.MathUtils.randFloatSpread(100));
 
             star.position.set(x, y, z);
             scene.add(star);
         }
 
         Array(200).fill().forEach(addStar);
 
         // Background
 
         const spaceTexture = new THREE.TextureLoader().load(spaceImage);
         scene.background = spaceTexture;
 
         // Avatar
 
         const meTexture = new THREE.TextureLoader().load(MyAvatar);
 
         const me = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: meTexture }));
 
         scene.add(me);
 
         // Moon
 
         const moonTexture = new THREE.TextureLoader().load(moonImage);
         const VenusTexture = new THREE.TextureLoader().load(venusImage);
        
 
 
         const moon = new THREE.Mesh(
             new THREE.SphereGeometry(3, 32, 32),
             new THREE.MeshStandardMaterial({
                 map: moonTexture,
                 normalMap: moonTexture,
             })
         );
         const venus = new THREE.Mesh(
             new THREE.SphereGeometry(3, 64, 64),
             new THREE.MeshStandardMaterial({
                 map: VenusTexture,
                 normalMap: VenusTexture,
             })
         );
        
 
         scene.add(moon);
         scene.add(venus);
       
         moon.position.z = 30;
         moon.position.setX(-20);
 
        
 
 
         me.position.z = -5;
         me.position.x = -2;
         me.position.y= 4;
 
         // Scroll Animation
 
         function moveCamera() {
             const t = document.body.getBoundingClientRect().top;
             moon.rotation.x += 0.05;
             moon.rotation.y += 0.075;
             moon.rotation.z += 0.05;
 
             venus.rotation.x += 0.05;
             venus.rotation.y += 0.075;
             venus.rotation.z += 0.05;
 
            
 
             me.rotation.y += 0.01;
             me.rotation.z += 0.01;
 
             camera.position.z = t * -0.01;
             camera.position.x = t * -0.0002;
             camera.rotation.y = t * -0.0002;
         }
 
         document.body.onscroll = moveCamera;
         moveCamera();
         const constSpeed = 0.01;
         window.addEventListener("mousemove", (e) => {
             if (e.clientX <= window.innerWidth / 2) {
                 moon.rotation.x -= constSpeed;
                 moon.rotation.y += constSpeed;
                 venus.rotation.x -= constSpeed;
                 venus.rotation.y += constSpeed;
             }
 
             if (e.clientX > window.innerWidth / 2) {
                 moon.rotation.x -= constSpeed;
                 moon.rotation.y -= constSpeed;
                 venus.rotation.x -= constSpeed;
                 venus.rotation.y -= constSpeed;
             }
 
             if (e.clientY > window.innerHeight / 2) {
                 moon.rotation.x -= constSpeed;
                 moon.rotation.y += constSpeed;
                 venus.rotation.x -= constSpeed;
                 venus.rotation.y += constSpeed;
             }
 
             if (e.clientY <= window.innerHeight / 2) {
                 moon.rotation.x -= constSpeed;
                 moon.rotation.y -= constSpeed;
                 venus.rotation.x -= constSpeed;
                 venus.rotation.y -= constSpeed;
             }
         });
 
         // Animation Loop
 
         const animate=()=> {
             requestAnimationFrame(animate);
 
             torus.rotation.x += 0.01;
             torus.rotation.y += 0.005;
             torus.rotation.z += 0.01;
 
             moon.rotation.x += 0.005;
             venus.rotation.x += 0.005;
            
 
             // controls.update();
 
             renderer.render(scene, camera);
         }
 
         animate();*/

        const textureLoader = new THREE.TextureLoader();

        const moonTexture = textureLoader.load(moonImage);
        const venusTexture = textureLoader.load(venusImage);
        const uranusTexture = textureLoader.load(uranusImage);
        const spaceTexture = textureLoader.load(spaceImage);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(4, 4, 8);


        const canvas = document.querySelector(".homeCanvas");
        const renderer = new THREE.WebGLRenderer({ canvas });

        const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
        const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
        const moon = new THREE.Mesh(moonGeometry, moonMaterial);
        // Torus
        const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
        const material = new THREE.MeshStandardMaterial({ color: 0x1cbbb4 });
        const torus = new THREE.Mesh(geometry, material);

        const meTexture = new THREE.TextureLoader().load(MyAvatar);

        const me = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: meTexture }));
        me.position.z = -5;
        me.position.x = -3;
        me.position.y = 4;

        scene.add(me);

        const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
        const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
        const venus = new THREE.Mesh(venusGeometry, venusMaterial);
        venus.position.set(-5, 3, 4);

        const uranusGeometry = new THREE.SphereGeometry(3, 64, 64);
        const uranusMaterial = new THREE.MeshBasicMaterial({ map: uranusTexture });
        const uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);
        uranus.position.set(-10, 5, 10);

        // Lights

        const star = new THREE.PointLight(0xffffff);
        star.position.set(5, 5, 5);

        const ambientLight = new THREE.AmbientLight(0xffffff);
        scene.add(star, ambientLight);

        const pointLight = new THREE.PointLight(0xffffff, 1);
        const pointLight2 = new THREE.PointLight(0xffffff, 0.1);

        pointLight.position.set(8, 5, 5);
        pointLight2.position.set(-8, -5, -5);

        renderer.setSize(window.innerWidth, window.innerHeight);

        scene.add(moon);
        scene.add(venus);
        scene.add(uranus);
        scene.add(pointLight2);
        scene.add(pointLight);

        scene.add(torus);
        scene.background = spaceTexture;

        const constSpeed = 0.01;
        window.addEventListener("mousemove", (e) => {
            if (e.clientX <= window.innerWidth / 2) {
                moon.rotation.x -= constSpeed;
                moon.rotation.y += constSpeed;
                venus.rotation.x -= constSpeed;
                venus.rotation.y += constSpeed;
                uranus.rotation.x -= constSpeed;
                uranus.rotation.y += constSpeed;
            }

            if (e.clientX > window.innerWidth / 2) {
                moon.rotation.x -= constSpeed;
                moon.rotation.y -= constSpeed;
                venus.rotation.x -= constSpeed;
                venus.rotation.y -= constSpeed;

                uranus.rotation.x -= constSpeed;
                uranus.rotation.y -= constSpeed;
            }

            if (e.clientY > window.innerHeight / 2) {
                moon.rotation.x -= constSpeed;
                moon.rotation.y += constSpeed;
                venus.rotation.x -= constSpeed;
                venus.rotation.y += constSpeed;

                uranus.rotation.x -= constSpeed;
                uranus.rotation.y += constSpeed;
            }

            if (e.clientY <= window.innerHeight / 2) {
                moon.rotation.x -= constSpeed;
                moon.rotation.y -= constSpeed;
                venus.rotation.x -= constSpeed;
                venus.rotation.y -= constSpeed;
                uranus.rotation.x -= constSpeed;
                uranus.rotation.y -= constSpeed;
            }
        });
        const addStar = () => {
            const geometry = new THREE.SphereGeometry(0.25, 24, 24);
            const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
            const star = new THREE.Mesh(geometry, material);

            const [x, y, z] = Array(3)
                .fill()
                .map(() => THREE.MathUtils.randFloatSpread(100));

            star.position.set(x, y, z);
            scene.add(star);
        }

        Array(200).fill().forEach(addStar);

        const animate = () => {

            requestAnimationFrame(animate);
            torus.rotation.x += 0.01;
            torus.rotation.y += 0.005;
            torus.rotation.z += 0.01;
            moon.rotation.x += 0.005;
            venus.rotation.x += 0.005;
            uranus.rotation.x += 0.005;
            moon.rotation.y += 0.001;
            venus.rotation.y += 0.001;
            uranus.rotation.y += 0.001;
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.render(scene, camera);
        };

        // Scroll Animation
        function moveCamera() {
            const t = document.body.getBoundingClientRect().top;
            moon.rotation.x += 0.05;
            moon.rotation.y += 0.075;
            moon.rotation.z += 0.05;

            venus.rotation.x += 0.05;
            venus.rotation.y += 0.075;
            venus.rotation.z += 0.05;

            uranus.rotation.x += 0.05;
            uranus.rotation.y += 0.075;
            uranus.rotation.z += 0.05;



            me.rotation.y += 0.01;
            me.rotation.z += 0.01;

            camera.position.z = t * -0.01;
            camera.position.x = t * -0.0002;
            camera.rotation.y = t * -0.0002;
        }

        document.body.onscroll = moveCamera;
        moveCamera();


        animate();
        const sr = ScrollReveal({
            origin: 'top',
            distance: '60px',
            duration: 2000,
            delay: 200,
            reset: true
        });

        sr.reveal('.homeSkills,.projects,.homeYoutube,.homeYoutubeWrapper,.homeYoutube>h3,.languageContainer,.interestContainer,.homeCanvasContainer,.homeContainer>h3', {});
        sr.reveal('.homeCanvasBox', { delay: 400 });
        sr.reveal('.language ,.progress', { interval: 200 });
        sr.reveal('.inner-circle,', { interval: 200 });

        return window.addEventListener("scroll", () => {
            //camera.rotation.z = window.scrollY * 0.001;
            //camera.rotation.y = window.scrollY * 0.003;

            const skillsBox = document.getElementById("homeskillsBox");
            const skillsBox2 = document.getElementById("homeskillsBox2");

            if (window.scrollY > 1500) {
                skillsBox.style.animationName = "homeskillsBoxAnimationOn";
                skillsBox2.style.animationName = "homeskillsBox2AnimationOn"
            } else {
                skillsBox.style.animationName = "homeskillsBoxAnimationOff";
                skillsBox2.style.animationName = "homeskillsBox2AnimationOff"
            }
        });





    }, []);
    /*const testData = [
        { bgcolor: "#6a1b9a", completed: 60 },
        { bgcolor: "#00695c", completed: 30 },
        { bgcolor: "#ef6c00", completed: 53 },
    ];*/



    return (
        <div className="home">
            <canvas className="homeCanvas"></canvas>

            <div className="homeCanvasContainer">
                <Typography variant="h1">
                    <p>N</p>
                    <p>O</p>
                    <p>U</p>
                    <p>R</p>
                    <p>C</p>
                    <p>H</p>
                    <p>E</p>
                    <p>N</p>
                    <p>E</p>
                </Typography>

                <div className="homeCanvasBox">
                    <Typography variant="h2">IT</Typography>
                    <Typography variant="h2">Engineering</Typography>
                    <Typography variant="h2">Student</Typography>
                </div>

                <Link to="/projects">VIEW WORK</Link>
            </div>

            <div className="homeScrollBtn">
                <MouseOutlined />
            </div>

            <div className="homeContainer">
                <Typography variant="h3" style={{ display: 'flex', flexDirection: 'row', marginBottom: '5px', justifyContent: 'center', alignItems: 'center' }}><GiGraduateCap style={{ marginRight: '5px' }} />Education</Typography>
                <TimeLine timelines={timelines} />
            </div>
            <div className="homeContainer">

                <Typography variant="h3" style={{ display: 'flex', flexDirection: 'row', marginBottom: '5px', justifyContent: 'center', alignItems: 'center' }}><MdWork style={{ marginRight: '5px' }} />Experience</Typography>

                <Experience experiences={experiences} />
            </div>

            <div className="homeSkills">
                <Typography variant="h3" style={{ display: 'flex', flexDirection: 'row', marginBottom: '5px', justifyContent: 'center', alignItems: 'center' }}><MdSettingsSuggest style={{ marginRight: '5px' }} />SKILLS</Typography>

                <div className="homeCubeSkills">
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
                        <img src={skills.image1.url} alt="Face1" />
                    </div>

                    <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
                        <img src={skills.image2.url} alt="Face2" />
                    </div>

                    <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
                        <img src={skills.image3.url} alt="Face3" />
                    </div>

                    <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
                        <img src={skills.image4.url} alt="Face4" />
                    </div>

                    <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
                        <img src={skills.image5.url} alt="Face5" />
                    </div>

                    <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
                        <img src={skills.image6.url} alt="Face6" />
                    </div>
                </div>

                <div className="cubeShadow"></div>
                <div className="mainSkills" >
                    {mainSkills.map((items, index) => {
                        return <div style={{ padding: '10px 10px 10px 10px' }} ><div style={{ textAlign: "center", padding: "10px 35px", color: "white" }}>
                            {items.name}
                        </div><CircularProgressBar size={130} linearGradient={["#7ffffb", "#02625f"]} fontColor="white" key={index} {...items}
                            styles={{
                                borderRadius: "50%",
                                boxShadow: "inset 0 0 25px 10px #a2caff",
                            }}>


                            </CircularProgressBar></div>;
                    })}
                </div>

                <div className="homeskillsBox" id="homeskillsBox">

                    <SiHtml5 />
                    <SiCss3 />
                    <SiJavascript />
                    <SiMongodb />
                    <SiExpress />
                    <SiReact />
                    <SiNodedotjs />


                </div>
                <div className="homeskillsBox2" id="homeskillsBox2">
                    <SiThreedotjs />
                    <SiCsharp />
                    <SiUnity />
                    <SiPython />
                    <SiJava />
                    <DiAndroid />
                    <SiMysql />



                </div>
            </div>

            <div className="homeYoutube">
                <Typography variant="h3" style={{ display: 'flex', flexDirection: 'row', marginBottom: '5px', justifyContent: 'center', alignItems: 'center' }}><MdOutlineCode style={{ marginRight: '5px' }} />PROJECTS</Typography>

                <div className="homeYoutubeWrapper">
                    {youtubes.map((item) => (
                        <YoutubeCard
                            image={item.image.url}
                            title={item.title}
                            url={item.url}
                            id={item._id}
                            key={item._id}
                        />
                    ))}
                </div>
            </div>

            <div className="homeContainer">
                <Typography variant="h3" style={{ display: 'flex', flexDirection: 'row', marginBottom: '5px', justifyContent: 'center', alignItems: 'center' }}><IoLanguage style={{ marginRight: '5px' }} />Languages</Typography>
                <div className="languageContainer">
                    {languages.map((item, index) => {

                        return <div className="language">
                            <Typography variant="h5" style={{ flex: 2, color: 'white', marginBottom: '5px', textAlign: 'left', width: '50%' }}>{item.title}</Typography>
                            <div className="progress">
                                <AnimatedLineProgressBar
                                    className="progress"
                                    percent={item.percent}
                                    progressColor="linear-gradient(to right, #02625f 60%, #7ffffb)"
                                    containerColor="#f0d4da"
                                    rounded={36}
                                    transition={{ easing: 'backInOut' }}
                                    stripe
                                />
                            </div>

                        </div>



                    })}





                </div>
            </div>
            <div className="homeContainer">

                <Typography variant="h3" style={{ display: 'flex', flexDirection: 'row', marginBottom: '5px', justifyContent: 'center', alignItems: 'center' }}><IoHeart style={{ marginRight: '5px' }} />Interest</Typography>
                <div className="interestContainer">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                        <div className="inner-circle">
                            <FaPaintBrush size={50} />

                        </div>
                        <Typography variant="h6">{interest.title1}</Typography>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div className="inner-circle">
                            <GiGrandPiano size={50} />


                        </div>
                        <Typography variant="h6">{interest.title2}</Typography>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                        <div className="inner-circle">
                            <FaBookReader size={50} />


                        </div>
                        <Typography variant="h6">{interest.title3}</Typography>
                    </div>


                </div>
                <div className="interestContainer">






                </div>






            </div>

        </div>
    );
};
export default Home;

