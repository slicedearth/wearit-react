// THIRD PARTY IMPORTS
import React from 'react';
import { Section, Container, Columns } from 'react-bulma-components';
import styled, { ThemeProvider } from 'styled-components';
// IMAGE IMPORT
// import homeIMG from '../assets/background.jpg';
import windowIMG from '../../assets/illustrations/undraw_window_shopping_b96y.svg';
import onlineIMG from '../../assets/illustrations/undraw_web_shopping_dd4l.svg';

// CUSTOM IMPORTS
import Jumbotron from '../layout/Jumbotron/Jumbotron';
import { homeHead, homeText } from '../layout/Jumbotron/props';
import { homeTheme } from '../layout/Jumbotron/themes';
import EmailForm from '../forms/EmailForm';

// CUSTOM CSS FOR IMAGE
const IMG = styled.img`
  margin-left: auto;
  margin-right: auto;
  display: block;
  max-width: 50vw;
`;
const Home = () => {
  // HOME COMPONENT
  return (
    <div>
      <ThemeProvider theme={homeTheme}>
        <Jumbotron title={homeHead} text={homeText} />
      </ThemeProvider>
      <Section>
        <Container>
          {/* <IMG src={homeIMG} alt='Sign Up' /> */}

          <Columns>
            <Columns.Column>
              <p className='is-size-5'>
                <IMG src={windowIMG} alt='Sign Up' />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                maxime earum unde reiciendis saepe iste ad pariatur, voluptatem,
                nemo, sint beatae hic aut officiis cum dolores dicta quae. Iste
                assumenda libero quaerat dolore, provident ducimus non deleniti,
                quia ipsam explicabo iure. Hic pariatur eius doloremque
                blanditiis est saepe provident assumenda doloribus corporis eos
                mollitia quasi distinctio non nulla harum explicabo nihil sint
                eligendi velit ea, quibusdam a ullam laboriosam eveniet.
              </p>
              <br />
              <p className='is-size-5'>
                Officia, vitae. Architecto, atque saepe laboriosam ducimus modi,
                cumque tempore velit a veniam quas iusto id numquam, minus
                distinctio exercitationem dolore magnam odio dicta totam vel
                nulla excepturi temporibus! Deserunt perferendis iusto
                dignissimos, nisi nobis qui commodi molestiae delectus
                reiciendis aspernatur laborum rem odit eligendi nemo omnis aut
                error. Deserunt cum totam placeat doloremque pariatur sapiente
                enim voluptatem fuga in optio cupiditate dolore, expedita
                suscipit voluptate sequi harum necessitatibus laborum
                consectetur veritatis, sit ullam sed tenetur ducimus nisi.
              </p>
            </Columns.Column>
            <Columns.Column>
              <IMG src={onlineIMG} alt='Sign Up' />

              <p className='is-size-5'>
                Id animi, cumque voluptatibus omnis et doloribus? Dolorem,
                exercitationem veniam quisquam, quam rerum repellat, eveniet
                atque pariatur asperiores earum deserunt odio! Nulla dolorem rem
                quas nihil odit tenetur aliquam quam recusandae itaque, eum eos
                at optio, molestias officiis id hic, voluptatibus sapiente
                harum? At, quas! Voluptas, quis nam aliquam doloribus ab ullam
                vitae eum at minima illo quaerat libero sed placeat vel
                molestiae natus quam sit blanditiis, amet similique?
              </p>
              <br />
              <p className='is-size-5'>
                Sint velit accusamus totam odit beatae expedita dolorum maiores
                corporis numquam, repellendus dignissimos quia vitae quos iste
                veritatis hic recusandae adipisci. Illum iure repellat, laborum
                blanditiis voluptate itaque! Harum expedita quas modi eligendi
                vel libero incidunt magnam quam, quasi molestias odit
                perferendis commodi, natus esse tempore possimus blanditiis
                reiciendis! Autem, in. Corporis animi eum fugiat suscipit,
                officia qui impedit repellat, voluptas alias labore nesciunt
                ipsum. Fugit.
              </p>
            </Columns.Column>
          </Columns>
          <EmailForm />
        </Container>
      </Section>
    </div>
  );
};

export default Home;
