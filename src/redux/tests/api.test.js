import React from "react";

import { setupApiStore } from "./test.utils";
import { ItemsAuthor } from "../../components/PlayListItems/ItemsAuthor";
import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { musicApi } from "../musicApi";


export const handlers = [
  rest.get('https://painassasin.online/catalog/track/8/', (res, ctx) => {
    return res(
      ctx.json([{ author: "Alexander Nakarada" }])
      
    );
  }),
];


const server = setupServer(...handlers);

const storeRef = setupApiStore(musicApi);

describe("Playlist feature", () => {  
  beforeAll(() => server.listen()); 
  afterEach(() => server.resetHandlers()); 
  afterAll(() => server.close());

  it("should show requested data", async () => {
    render(<ItemsAuthor />, { wrapper: storeRef.wrapper });   
    screen.getByText("Loading...");    
    expect(await screen.findByText(/Alexander Nakarada/i)).toBeInTheDocument();
    expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
  });
});