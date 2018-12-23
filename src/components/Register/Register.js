import React from 'react';

const Register = ({ onRouteChange }) => {
  return (
    <article className="br3 ba near-white b--white-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
    <main className="pa4">
  <div className="measure">
    <fieldset id="sign_in" className="ba b--transparent ph0 mh0">
      <legend className="f2 fw6 ph0 mh0">Register</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="nickname">Nickname</label>
        <input className="pa2 input-reset near-white ba b--white-30 bg-transparent w-100" type="text" name="nickname"  id="nickname"/>
      </div>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input className="pa2 input-reset near-white ba b--white-30 bg-transparent w-100" type="email" name="email-address"  id="email-address"/>
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input className="b pa2 input-reset near-white ba b--white-30 bg-transparent w-100" type="password" name="password"  id="password"/>
      </div>
    </fieldset>
    <div className="">
      <input className="b w-50 ph3 pv2 input-reset near-white ba b--white-30 bg-transparent grow pointer f6 dib" type="submit" value="Register" onClick={() => onRouteChange('home')}/>
    </div>
  </div>
</main>
</article>

  );
}

export default Register;
