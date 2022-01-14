import { fireEvent } from "@testing-library/react";
import { shallow } from "enzyme"
import GifImg from "../../components/GifImg/GifImg";


describe('Pruebas en Componente GifImg', () => {

    const title = "esto es un titulo";
    const url = "https://prueba.com";

    const wrapper = shallow(<GifImg title={title} url={url}></GifImg>);

    test('Debe de mostrar el componente correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        // console.log(img.props().src);
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('debe de tener la imagen con clase hide',() =>{
        const img = wrapper.find('img');
        // console.log(img.props().src);
        expect(img.prop('className')).toBe('hide');
    });   
})
