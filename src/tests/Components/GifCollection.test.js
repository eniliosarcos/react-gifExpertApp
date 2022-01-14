import { shallow } from "enzyme";
import GifCollection from "../../components/GifCollection/GifCollection";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs');


describe('Pruebas en el componente GifCollection', () => {

    test('Debe de mostrar el componente correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifCollection collection="Dragon ball"></GifCollection>);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar items cuando se cargan imagenes con useFetchGifs', () =>{
        
        const gifs = [{
            id:'ABC',
            url: 'https//localhost/tortuga.jpg',
            title: 'tortuga'
        },{
            id:'ABC123',
            url: 'https//localhost/papelon.jpg',
            title: 'papelon'
        }]
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifCollection collection="Dragon ball"></GifCollection>);

        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifImg').length).toBe(gifs.length);
    });
})
