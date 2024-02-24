import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Home.css'
import custom from '../../images/custom.png'
import password from '../../images/password.jpg'
import Footer from '../Footer/Footer'
import { rootUrl } from '../../utils/constant'



const Home = () => {

    const [originalUrl, setOriginalUrl] = useState('')
    const [shortUrl, setShortUrl] = useState('')
    const [copyBtnValue, setCopyBtnValue] = useState('Copy')
    const [copied, setCopied] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault();

        const postOriginalUrl = async () => {


            const { data } = await axios.post(`${rootUrl}/api/v1/url/anony-short`, { originalUrl }, {
                headers: {
                    "Content-Type": "application/json"
                }
            })

            setShortUrl(data.shortUrl);
        }
        postOriginalUrl();

    }

    function copyText() {
        navigator.clipboard.writeText(shortUrl);

        setCopyBtnValue('Copied');
        setCopied(true);

        setInterval(() => {
            setCopyBtnValue('Copy');
            setCopied(false);
        }, 3000)
    }




    return (
        <div className='home'>

            {
                // <Navbar />
            }

            <div className="header">
                <h2>Website Name</h2>
                <p id='title'>Create Your URL 🤪</p>

                <form className="url-form" onSubmit={handleSubmit}>
                    <input type="text" label="Enter URL" onChange={(e) => { setOriginalUrl(e.target.value) }} />
                    <button>Create</button>
                </form>

                {
                    shortUrl && shortUrl.length > 0 ? (
                        <div className="showUrl">

                            <h3>{shortUrl}</h3>
                            <button className='copyBtn' style={{ color: copied ? "#fff" : "", background: copied ? "green" : "#03031f", border: copied ? "none" : "" }} onClick={copyText}>{copyBtnValue}</button>
                        </div>
                    ) : null
                }
            </div>


            <div className="login-section">
                <p>Login Now to access all features <Link to="/login">Login</Link></p>
            </div>

            <div id={"features"} className="features-section">
                <h3>Features</h3>

                <div className="features-div">
                    <div className="feature-box">
                        <h4>Custom Url</h4>
                        <p className='feature-description'>Customize your URLs. Add custom name or codes.</p>
                        <div className="feature-image">
                            <img src={custom} alt="custom" />;
                        </div>
                    </div>


                    <div className="feature-box">
                        <h4>Share</h4>
                        <p className='feature-description'>Share your URLs with your friends.</p>
                        <div className="feature-image">
                            <img src={custom} alt="custom" />;
                        </div>
                    </div>
                    <div className="feature-box">
                        <h4>Link Expiry</h4>
                        <p className='feature-description'>Set expiry date for your URLs.</p>
                        <div className="feature-image">
                            <img src={password} alt="password" />

                        </div>
                    </div>
                    <div className="feature-box">
                        <h4>Link Password</h4>
                        <p className='feature-description'>Set password for your URLs.</p>
                        <div className="feature-image">
                            <img src={password} alt="password" />

                        </div>
                    </div>
                </div>
            </div>



            {/* <section className='faq-section'>
                <h3>Frequently asked questions</h3>
                <div className="faq-div">
                    <div onClick={() => expand(1)} className={showId === 1 ? 'faq-collapse faq-collapse-selected' : 'faq-collapse'}>
                        <div className="collapse-header">
                            {
                                showId === 1 ? angleUp : angleDown
                            }
                            <h2>What is URL shortening?</h2>
                        </div>
                        {
                            showId === 1 ? (
                                <div className="show" id='collapse-1'>
                                    <p>URL shortening is a technique to convert long URLs to shoter one or can be given a customizable name.</p>
                                </div>
                            ) : null
                        }
                    </div>
                    <div onClick={() => expand(2)} className={showId === 2 ? 'faq-collapse faq-collapse-selected' : 'faq-collapse'}>
                        <div className="collapse-header">
                            {
                                showId === 2 ? angleUp : angleDown
                            }
                            <h2>Why should I use URL shortening?</h2>
                        </div>
                        {
                            showId === 2 ? (
                                <div className="show" id='collapse-2'>
                                    <p> Their are many reasons to use URL shortening, for example, if you have to share some website url and it is very long, so it may looks wierd, for this reason you can use URL shortner
                                        Also if you want to track your URLs click count, then you can use URL shortner.
                                        If you want to give a custom name to your URL, then you can use URL shortner.
                                        If you want to generate QR code for your URL, then you can use URL shortner.
                                        And many more...
                                    </p>
                                </div>
                            ) : null
                        }

                    </div>
                    <div onClick={() => expand(3)} className={showId === 3 ? 'faq-collapse faq-collapse-selected' : 'faq-collapse'}>
                        <div className="collapse-header">
                            {
                                showId === 3 ? angleUp : angleDown
                            }
                            <h2>How to use URL shortner?</h2>
                        </div>
                        {
                            showId === 3 ? (

                                <div className="show" id='collapse-3'>
                                    <p>It is very easy to use URL shortner, just enter your long URL and click on shorten button, it will generate a short URL for you.</p>
                                </div>
                            ) : null
                        }
                    </div>
                    <div onClick={() => expand(4)} className={showId === 4 ? 'faq-collapse faq-collapse-selected' : 'faq-collapse'}>
                        <div className="collapse-header">
                            {
                                showId === 4 ? angleUp : angleDown
                            }
                            <h2>What is QR code? And will I genrate it?</h2>
                        </div>
                        {
                            showId === 4 ? (

                                <div className="show" id='collapse-4'>
                                    <p>QR code is a two-dimensional barcode that can be read by a camera. QR code is used to store information like URL, text, phone number, email address, etc. Yes, you can generate QR code for your URL by just clicking 'Genrate QR code' on URL, You have to be loggedin for using this functionality</p>
                                </div>
                            ) : null
                        }
                    </div>
                    <div onClick={() => expand(5)} className={showId === 5 ? 'faq-collapse faq-collapse-selected' : 'faq-collapse'}>
                        <div className="collapse-header">
                            {
                                showId === 5 ? angleUp : angleDown
                            }
                            <h2>What is the difference between free and premium account?</h2>
                        </div>
                        {
                            showId === 5 ? (

                                <div className="show" id='collapse-5'>
                                    <p>
                                        In free account you are missing fantastic features like you can only genrate 5 URLs per day and you can't see your URLs analytics(clicks, countries etc.) and you can't genrate QR code for your URLs
                                    </p>
                                </div>
                            ) : null
                        }
                    </div>
                </div>
            </section> */}

            <Footer />
        </div>
    )
}

export default Home