import expect from 'expect';
import React from 'react';
import {shallow, mount} from 'enzyme';
import App from './App';

function setup(name) {
    const props = {
        name: name
    };
    return shallow(<App {...props} />);
}

describe("App", () => {

    it("should contain a div", () => {
        const wrapper = setup();
        expect(wrapper.find('div').length).toBe(1);
    });

    it("should say Hello Test! when passing Test as prop name", () => {
        const wrapper = setup("Test");
        expect(wrapper.text()).toBe("Hello Test!");
    });

    it("should say Hello ! when passing no prop name", () => {
        const wrapper = setup();
        expect(wrapper.text()).toBe("Hello !");
    });

});
