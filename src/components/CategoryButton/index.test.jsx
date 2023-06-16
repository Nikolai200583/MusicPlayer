import { CategoryButton } from "./CategoryButton";
import { screen, render, fireEvent } from "@testing-library/react";

const dataTestId = "test-id";

describe("Callbacks tests", () => {
    it("should call 'onClick' prop", () => {
      const cb = jest.fn();
      render(
        <CategoryButton onClick={cb} dataTestId={dataTestId} />
      );

      fireEvent.click(screen.getByTestId(dataTestId));
      expect(cb).toBeCalledTimes(1);
    });
 });
