import {useFetchGifs} from '../../hooks/useFetchGifs'
import {renderHook} from '@testing-library/react-hooks'

describe('Pruebas en el hook useFetchGifs', () => {
    
    test('debe de retornar el estado inicial ', async() => {

        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('dragon ball'));
        const {data, loading} = result.current;

        await waitForNextUpdate();

        expect(data.length).toBe(0);
        expect(loading).toBe(true);

        // const {data, loading} = useFetchGifs('dragon ball');
    })

    test('debe de retornar un arreglo de imgs y el loading en false', async() => {
        const {result,waitForNextUpdate} = renderHook(() => useFetchGifs('dragon ball'));
        await waitForNextUpdate();
        const {data, loading} = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    })
    
    
})
