import {
  AddWrapper,
  BasketContainerEdit,
  BasketEditInput,
  BasketBtnDiv,
  MainWrapper,
  SubWrapper,
  AddBasket,
  Wrapper,
} from "./basketWrite.styles";
import MicroButton from "../../../commons/button/micro.Button";
import { ChangeEvent } from "react";
interface IBasketWritePageUIProps {
  isAdd: boolean;
  onClickAddBasket: () => void;
  onClickCreateBasket: () => void;
  onChangeAddBasket: (event: ChangeEvent<HTMLInputElement>) => void;
}
const BasketWritePageUI = (props: IBasketWritePageUIProps) => {
  return (
    <MainWrapper>
      {props.isAdd ? (
        <SubWrapper>
          <AddWrapper>
            <BasketContainerEdit>
              <BasketEditInput onChange={props.onChangeAddBasket} />
              <BasketBtnDiv>
                <MicroButton
                  buttonName="Cancle"
                  onClick={props.onClickAddBasket}
                />
                <MicroButton
                  buttonName="Add"
                  onClick={props.onClickCreateBasket}
                />
              </BasketBtnDiv>
            </BasketContainerEdit>
          </AddWrapper>
        </SubWrapper>
      ) : (
        <Wrapper>
          <AddBasket onClick={props.onClickAddBasket}>+ Add Basket</AddBasket>
        </Wrapper>
      )}
    </MainWrapper>
  );
};

export default BasketWritePageUI;
