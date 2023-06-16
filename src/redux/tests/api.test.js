import React from "react";

import { setupApiStore } from "./test.utils";
import { PlayListItem } from "../../components/PlayListItems/PlayListItem";
import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { musicApi } from "../musicApi";

// Описываем endpoint-ы, которые хотим замокировать
export const handlers = [
  rest.get('https://painassasin.online/catalog/track/all', (req, res, ctx) => {
    return res(
      ctx.json([{ id: "8", author: "Alexander Nakarada" }])
    );
  }),
];

// Готовим моковый сервер
const server = setupServer(...handlers);

// Мокируем api store
const storeRef = setupApiStore(musicApi);

describe("Playlist feature", () => {
  // Поднимаем тестовый сервер перед запуском тестов
  beforeAll(() => server.listen());

  // Чистим обработчики между тестами
  afterEach(() => server.resetHandlers());

  // Отрубаем сервер после выполнения тестов.
  // НЕ ЗАБЫВАЙТЕ ЭТО ДЕЛАТЬ, иначе сервер будет работать вхолостую
  afterAll(() => server.close());

  it("should show requested data", async () => {
    render(<PlayListItem />, { wrapper: storeRef.wrapper });

    // Проверяем начальное состояние компонента
    screen.getByText("Loading...");

    // Ждем ответа от сервера. Как только он придет,
    // отрисуется пункт списка
    expect(await screen.findByText(/Alexander Nakarada/i)).toBeInTheDocument();
    expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
  });
});