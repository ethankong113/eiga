import { renderComponent, renderMUIComponent, expect } from '../../test_helper';
import HomePage from '../../../frontend/components/home_page/home_page';

describe('Home Page', () => {

  let component;

  beforeEach(()=>{
    component = renderComponent(HomePage);
  });

  it('contains a welcome message', ()=>{
    expect(component).to.contain('Welcome to Eiga!');
  });
});
