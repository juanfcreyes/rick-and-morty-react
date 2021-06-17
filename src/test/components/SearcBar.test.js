import { mount } from "enzyme/build";
import { Provider } from "react-redux";
import { SearchBar } from "../../components/SearchBar";
import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';
import { callApi } from "../../store/appReducer";
import { API_URL } from "../../data/constants";

const mocktore = configureStore();
const initialState = {};
const store = mocktore(initialState);
store.dispatch = jest.fn();

jest.mock("../../store/appReducer", () => ({
    callApi: jest.fn(),
}));

describe('Test over SearchBar', () => { 

    const wrapper = mount(
    <Provider store={store}>
        <SearchBar></SearchBar>
    </Provider>
    );

    test('should show correctly ', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should dispath callApi with the default url ', () => {
        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        });
        expect(callApi).toHaveBeenCalled();
        expect(callApi).toHaveBeenCalledWith();
    });
    
    test('should dispath callApi with the default query url ', () => {
        wrapper.find('input').simulate('change', {
            target: {
                value: 'rick'
            }
        });    
        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        });
        expect(callApi).toHaveBeenCalled();
        expect(callApi).toHaveBeenCalledWith(`${API_URL}?name=rick`);
    });    
});