describe('Get elements on qaauto space', () => {
  beforeEach(() => {
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
  });

  
  it('get sign up button', () => {
    cy.get('.hero-descriptor_btn');
  });

  it('get social icons', () => {
    cy.get('[href="https://www.facebook.com/Hillel.IT.School"] > .socials_icon')
    cy.get('[href="https://t.me/ithillel_kyiv"] > .socials_icon');
    cy.get('[href="https://www.youtube.com/user/HillelITSchool?sub_confirmation=1"] > .socials_icon')
    cy.get('[href="https://www.instagram.com/hillel_itschool/"] > .socials_icon')
    cy.get('[href="https://www.linkedin.com/school/ithillel/"] > .socials_icon')
   });

   
  it('get site link and email', () => {
    cy.get('.display-4')
    cy.get('.h4')
   });
});
