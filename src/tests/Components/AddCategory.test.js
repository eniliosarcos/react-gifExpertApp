import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory/AddCategory";


describe('Pruebas en AddCategory', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategory={setCategories}></AddCategory>);

    beforeEach(() =>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategory={setCategories}></AddCategory>);
    });

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'hola mundo';
        input.simulate('change', {target:{value}});
        const inputAfter = wrapper.find("input");
        expect(inputAfter.prop("value")).toBe(value);
    });

    test('No debe de postear la informacion con submit', () => {
        wrapper.find('form').simulate('submit',{preventDefault: () =>{}});
        expect(setCategories).not.toHaveBeenCalled();
    });
    
    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'hola mundo';

        wrapper.find('input').simulate('change', {target:{value}});

        wrapper.find('form').simulate('submit',{preventDefault: () =>{}});
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        expect(wrapper.find('input').prop('value')).toBe('');
    });
    
    
});
