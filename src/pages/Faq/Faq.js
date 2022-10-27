import React from 'react';

const Faq = () => {
  return (
    <div>
      <h1>What this site about?</h1>
      <p>Learning Zone is E-learning platform.Where you can Learn Essential topics about web-development such as JavaScript, HTML, CSS, React JS. </p>
        <br />
      <h1>How react works internally?</h1>
      <p>Ans: React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
      <br />
      <h1>How react hooks work?</h1>
      <p>Hooks are functions that let you “hook into” React state and lifecycle features from function component. Hook don't work inside classes they let you use React without classes. (We don't recommend rewriting your existing components overnight but you can start using Hooks in the new ones if you'd like.)</p>
    </div>
  );
};

export default Faq;