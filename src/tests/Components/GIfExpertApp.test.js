import { shallow } from "enzyme";
import GifExpertApp from "../../components/GifExpertApp";


describe('Prueba con el componente GifExpertApp', () => {

    test('Debe de mostrar el componente correctamente', () => {
        const wrapper = shallow(<GifExpertApp></GifExpertApp>);
        expect(wrapper).toMatchSnapshot();
    })
    

    test('debe de mostrar una lista de categorias', () =>{
        const categories = ['One punch', 'Dragon ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}></GifExpertApp>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifCollection').length).toBe(categories.length);
    })
})
