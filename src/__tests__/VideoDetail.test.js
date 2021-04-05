import React from 'react';
import renderer from 'react-test-renderer';
import VideoDetail from '../components/VideoDetail';
import data from '../mock/youtube-videos-mock.json';


describe('VideoDetail Test', () => {

    test("Ensure Detail video component is getting rendered", () => {
        const videoData = {id:"nmXMgqjQzls", title:"Test Titulo", desciption: "Test description", setShowDetail: () =>{}}

        const videoDetail = renderer
            .create(  <VideoDetail videoid={videoData} data= {data.items} />)
            .toJSON();

            expect(videoDetail).toMatchSnapshot();

    });


    test("Ensure that main video is rendered", () => {


    });

    test("Ensure that Title in Video Card match with the mock item selected", () => {


    });

    test("Ensure that Description is displayed selected", () => {


    });

});