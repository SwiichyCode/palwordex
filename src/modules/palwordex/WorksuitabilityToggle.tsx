import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { worksuitability } from "@/constants/worksuitability";
import { WorkSuitabilityName } from "@prisma/client";

type Props = {
  setWorksuitability: (worksuitability: WorkSuitabilityName[]) => void;
};

export const WorksuitabilityToggle = ({ setWorksuitability }: Props) => {
  return (
    <ToggleGroup
      type="multiple"
      onValueChange={(value) =>
        setWorksuitability(value as WorkSuitabilityName[])
      }
    >
      {worksuitability.map((work) => (
        <ToggleGroupItem key={work.name} value={work.name}>
          {work.name} {work.icon}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
};
