import React from 'react';
import renderer from 'react-test-renderer';
import VideoList from '../components/VideoList';
import data from '../mock/youtube-videos-mock.json';


describe('Video List Test', () => {
    const setShowDetail = () => {
    };

    test("Ensure Video List is getting rendered", () => {
        const videoList = renderer
            .create( < VideoList data = { data.items }
                setShowDetail = { setShowDetail }/>)
            .toJSON();

        expect(videoList).toMatchSnapshot();
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