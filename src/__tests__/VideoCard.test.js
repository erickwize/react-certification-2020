import React from 'react';
import renderer from 'react-test-renderer';
import VideoCard from '../components/VideoCard';


describe('VideoCard Test', () => {
    const id = {videId:1};
    const thumbnail= {high:"prueba.jpg"};
    const snippet={title:"Test", description:"Test Description", thumbnails:thumbnail};
    const  setShowDetail = ()=> {

    }

    test("VideoCard is getting rendered", () => {
        const videoCard = renderer
                .create(<VideoCard id={id} snippet={snippet} setShowDetail={setShowDetail} />)
                .toJSON();

        expect(videoCard).toMatchSnapshot();

    });


    test("Ensure that Video Card is rendered", () => {


    });

    test("Ensure that Thumbnail in Video Card match with the one in the mock item", () => {


    });

    test("Ensure that Title in Video Card match with the mock item selected", () => {


    });

    test("Ensure that Title in Video Card match with the mock item selected", () => {


    });

});