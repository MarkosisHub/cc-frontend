import React from "react";
import { useSelector } from "react-redux";
import classes from "./DropdownField.module.css";

const DropdownField = ({
  products,
  categories,
  subCategories,
  types,
  setCategories,
  setSubCategories,
  setTypes,
  inputCategory,
  inputSubcategory,
  inputType,
  setInputCategory,
  setInputSubcategory,
  setInputType,
  category,
  subCategory,
  type,
}) => {


  console.log("products", products);

  // category
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  const uniqueArray = products
    ?.map((x) => x.category.toLowerCase().trim())
    .filter(onlyUnique);

  // subcategory
  function onlyUnique1(value, index, self) {
    return self.indexOf(value) === index;
  }
  const uniqueArray1 = products
    ?.map((x) => x.subCategory.toLowerCase().trim())
    .filter(onlyUnique1);

  // brand
  function onlyUnique2(value, index, self) {
    return self.indexOf(value) === index;
  }
  const uniqueArray2 = products
    ?.map((x) => x.type.toLowerCase().trim())
    .filter(onlyUnique2);

  console.log(inputCategory, inputSubcategory, inputType);

  return (
    <>
      <div className={classes.dropdownFieldSection}>
        {category && (
          <>
            <div>
              <p>Existing category</p>
              <select
                value={categories}
                onChange={(e) => setCategories(e.target.value)}
                name="categories"
                id=""
              >
                <option value="">Select...</option>
                {uniqueArray.map((category, idx) => {
                  return <option key={idx} value={category}>{category}</option>;
                })}
              </select>
            </div>
            <div>
              <p>Add new category</p>
              <input
                type="text"
                name={category ? "categories" : "inputCategory"}
                value={inputCategory}
                onChange={(e) => setInputCategory(e.target.value)}
              />
            </div>
          </>
        )}
      </div>
      <div className={classes.dropdownFieldSection}>
        {subCategory && (
          <>
            <div>
              <p>Existing subcategories</p>
              <select
                value={subCategories}
                onChange={(e) => setSubCategories(e.target.value)}
                name="subCategories"
                id=""
              >
                <option value="">Select...</option>
                {uniqueArray1.map((subCategory, idx) => {
                  return <option key={idx} value={subCategory}>{subCategory}</option>;
                })}
              </select>
            </div>

            <div>
              <p>Add new subcategory</p>
              <input
                type="text"
                name="inputSubcategory"
                value={inputSubcategory}
                onChange={(e) => setInputSubcategory(e.target.value)}
              />
            </div>
          </>
        )}
      </div>
      <div className={classes.dropdownFieldSection}>
        {type&& (
          <>
            <div>
              <p>Existing Types</p>
              <select
                value={types}
                onChange={(e) => setTypes(e.target.value)}
                name="types"
                id=""
              >
                <option value="">Select...</option>
                {uniqueArray2.map((type, idx) => {
                  return <option key={idx} value={type}>{type}</option>;
                })}
              </select>
            </div>
            <div>
              <p>Add new Type</p>
              <input
                type="text"
                name="inputType"
                value={inputType}
                onChange={(e) => setInputType(e.target.value)}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default DropdownField;
