// THIRD PARTY IMPORTS
import React from 'react';
import { Section, Container } from 'react-bulma-components';
import styled, { ThemeProvider } from 'styled-components';
// ILLUSTRATION IMPORT
import aboutIMG from '../../assets/illustrations/undraw_Waiting__for_you_ldha.svg';
// CUSTOM IMPORTS
import Jumbotron from '../layout/Jumbotron/Jumbotron';
import { aboutHead, aboutText } from '../layout/Jumbotron/props';
import { aboutTheme } from '../layout/Jumbotron/themes';
// CUSTOM CSS FOR IMAGE
const IMG = styled.img`
  margin-left: auto;
  margin-right: auto;
  display: block;
  max-width: 30vw;
`;
const About = () => {
  // ABOUT COMPONENT
  return (
    <div>
      <ThemeProvider theme={aboutTheme}>
        <Jumbotron title={aboutHead} text={aboutText} />
      </ThemeProvider>
      <Section>
        <Container>
          <h1 className='is-size-2 has-text-centered has-text-weight-bold'>
            Our Story
          </h1>
          <IMG src={aboutIMG} alt='About' />
          <p className='is-size-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            maxime magni asperiores? Eligendi debitis aliquid nam necessitatibus
            eos omnis, reprehenderit mollitia itaque magni laborum doloremque
            sit alias obcaecati maxime cum consectetur, dignissimos dolore quia
            sed commodi quis placeat possimus! Voluptatum iure exercitationem
            consequuntur asperiores corporis, quibusdam quas ea. Fugit vitae
            culpa sit perferendis consectetur ipsa esse fugiat, distinctio
            voluptatibus eum, quam rem ad ea quibusdam. Amet nemo maxime nisi
            totam voluptas quos, aut rem illum architecto, molestiae vel qui
            odio necessitatibus eos dolorum dolores iste. Et excepturi quae
            doloribus unde dolore cumque exercitationem facilis quaerat a iure
            sed at voluptates dolorem repellat aut, quibusdam repudiandae nulla,
            voluptatibus, cum id animi quam accusamus quod odio? Maiores, minus.
            Deleniti nam reiciendis exercitationem praesentium officiis sunt
            commodi tempore in, distinctio error! Magnam modi placeat iste
            aliquam ipsum natus.
          </p>
          <br />
          <p className='is-size-5'>
            Id vero dolorum corrupti molestiae quaerat qui eaque nihil
            cupiditate eum, voluptatibus reprehenderit dolorem provident
            similique incidunt doloribus fugit odit voluptatem! Possimus error
            vel eligendi, commodi porro quia praesentium explicabo, officia ut
            fugiat quis illo iure atque deleniti. Sed aut ipsum ducimus vitae
            quisquam explicabo magni quo esse asperiores dicta ea, soluta
            reiciendis illum quod optio necessitatibus cum tempore provident
            harum quos! Tenetur odit consectetur eos exercitationem quae.
            Doloribus, expedita. Ad voluptatem quam commodi accusamus maiores
            consequatur, atque quos quisquam et rerum culpa, neque sint.
            Distinctio eveniet voluptatum excepturi ex nemo provident alias
            explicabo labore similique aperiam! Harum praesentium perspiciatis
            eius sit, dolorem et quaerat, optio illo aut totam dicta error,
            cumque quis corporis quas. Tempore nisi ab hic et facilis blanditiis
            quod eius perspiciatis voluptate dolores porro nobis, iusto,
            necessitatibus incidunt, doloremque asperiores vitae corrupti
            aliquid? Odit sequi at mollitia odio molestias illo sed animi iste
            voluptates incidunt quasi nostrum veniam quos reprehenderit
            consequuntur ad rem dolorum veritatis rerum, ut dolorem
            exercitationem accusamus repellendus assumenda! Veniam cumque nulla,
            sint quos nemo provident labore atque error. Inventore nesciunt
            asperiores quaerat quasi consectetur.
          </p>
        </Container>
      </Section>
    </div>
  );
};

export default About;
