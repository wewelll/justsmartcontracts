import { Collapse } from "antd";
import { TContract, contractModel } from "@entities/contract";
import { ParamCall } from "@features/execute-contract/ui/ParamCall";

type TProps = {
  contract: TContract;
};

export const CallsList = ({ contract }: TProps) => {
  const functions = contractModel.useContractParamCalls(contract);

  const items = functions.map((item, index) => ({
    label: item.name,
    key: index,
    children: <ParamCall contract={contract} abiItem={item} />,
  }));

  return <Collapse items={items} />;
};
