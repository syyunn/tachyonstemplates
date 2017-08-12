import React from 'react';
export default () =>
  <form className="pa4 black-80">
    <div className="measure-narrow">
      <label for="password" className="f6 b db mb2">
        Password
      </label>
      <input
        className="input-reset ba b--black-20 pa2 mb2 db w-100"
        type="password"
        id="password"
        aria-describedby="password-desc"
      />
      <small id="password-desc" className="f6 lh-copy black-60 db mb2">
        Must be 9 characters long and contain both a number and an uppercase
        character.
      </small>
    </div>
  </form>;
