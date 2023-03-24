import { useState, forwardRef, useImperativeHandle } from "react";
import Grid from "@mui/material/Grid";
import { TypeComponentFormEnum } from "src/enum/ComponentsEnum";
import { PropsFormCommon } from "src/model/component/FormCommonModel";
import { Search } from "@mui/icons-material";
import { Button } from "@mui/material";
import Space from "../space/Space";

function FormSearchCommon(props: PropsFormCommon, ref: any) {
  const { options, optionsSelect, onSearch, showButtonSearch } = props;
  
  const initFromData = () => {
    const form: any = {};
    for (const option of options) {
      form[option.field] = "";
    }
    return form;
  };
  const [formData, setFormData] = useState(initFromData);

  const checkTypeComponentSelect = (type?: string) =>
    type && type === TypeComponentFormEnum.SELECT;
  
  const onChangeSelect = (record: any, value: string | number, field: string) => {
    setFormData((pre: any) => ({ ...pre, [field]: value }));
  };

  const onChangeInput = (value: string, field: string) => {
    setFormData((pre: any) => ({ ...pre, [field]: value }));
  };

  const onHanleSearch = () => {
    onSearch && onSearch(formData);
  };

  useImperativeHandle(
    ref,
    () => ({
      formData
    }),
    [formData]
  );

  return (
    <Grid container spacing={3}>
      {
        options.map((item, index) => {
          return (
            (
              <Grid key={index} item xs={12} md={6} lg={3}>
                {
                  <item.component
                    label={item.label}
                    options={checkTypeComponentSelect(item.typeComponent) ? optionsSelect : []}
                    onChange={checkTypeComponentSelect(item.typeComponent)
                      ? (record: any, value: string | number) => onChangeSelect(record, value, item.field)
                      : (value: string) => onChangeInput(value, item.field) 
                    }
                  />
                }
              </Grid>
            )
          );
        })
      }
      {
        showButtonSearch && (
          <Grid xl={12} item>
            <Space justifyContent="end">
              <Button variant="contained" startIcon={<Search />} onClick={onHanleSearch}>
                Tìm kiếm
              </Button>
            </Space>
          </Grid>
        )
      }
    </Grid>
  );
};

export default forwardRef(FormSearchCommon);
