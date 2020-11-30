import React from 'react';
import { shallow } from "enzyme";
import '../../../setup';
import Table from "../Table";

describe('Table Component', () => {
    
    it('renders props', () => {
        expect(shallow(<Table headers={["Test"]} body={"Test"}/>).length).toBe(1);
    });

    it('should render snapshot', () => {
        expect(shallow(<Table headers={["Test"]} body={"Test"}/>)).toMatchSnapshot();
    });

    it('validates table headers and body', () => {
        const headers = ["TestHeader1","TestHeader2"];
        const body = ["TestBody2", "TestBody2"];

        const container = shallow(<Table headers={headers} body={body}/>);

        const table = container.find('table');

        const thead = table.find('thead');
        expect(thead).toHaveLength(1);

        const Tableheaders = thead.find('th');
        expect(Tableheaders).toHaveLength(headers.length);

        const tbody = table.find('tbody');
        expect(tbody).toHaveLength(1);
    })
});

