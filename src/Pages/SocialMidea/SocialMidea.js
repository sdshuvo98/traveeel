import React from 'react';
import GoogleIcon from '../../icons/google.png'
import FacebookIcon from '../../icons/facebook.png'
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SocialMidea = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
    return (
        <div>
            <section>
                <div className='flex items-center justify-center'>
                    <div className='h-[1px] w-[160px] bg-white opacity-50'></div>
                    <p className='px-2'>or</p>
                    <div className='h-[1px] w-[160px] bg-white opacity-50'></div>
                </div>
                <div className='flex flex-col md:flex-row justify-between items-center gap-5 my-5'>
                    <button onClick={() => signInWithGoogle()} className='flex items-center gap-2 border py-2 px-4 rounded-lg hover:bg-white hover:text-black duration-200 ease-in'>
                        <img className='h-5' src={GoogleIcon} alt="" />
                        <p>Join with Google</p>
                    </button>
                    <button onClick={() => signInWithFacebook()} className='flex items-center gap-2 border py-2 px-4 rounded-lg hover:bg-white hover:text-black duration-200 ease-in'>
                        <img className='h-6' src={FacebookIcon} alt="" />
                        <p>Join with Facebook</p>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default SocialMidea;