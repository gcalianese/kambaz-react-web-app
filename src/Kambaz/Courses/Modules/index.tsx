import { useState, useEffect } from "react";
import { editModule, updateModule, deleteModule, setModules }
  from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import ModuleControlButtons from "./ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import { useParams } from "react-router";
import ModulesControls from "./ModulesControl";
import { FormControl } from "react-bootstrap";
import * as coursesClient from "../client";
import * as modulesClient from "./client";
import { v4 as uuidv4 } from "uuid";


export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const fetchModules = async () => {
    const modules = await coursesClient.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };
  useEffect(() => {
    fetchModules();
  }, []);

  const addModuleHandler = async () => {
    console.log("add button clicked");
    await coursesClient.createModuleForCourse(cid!, {
      name: moduleName,
      course: cid,
      _id: uuidv4(),
    });
    await fetchModules();
    setModuleName("");
  };

  const deleteModuleHandler = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };

  const updateModuleHandler = async (module: any) => {
    await modulesClient.updateModule(module);
    dispatch(updateModule(module));
  };

  return (
    <div>
      {currentUser.role === "FACULTY" && <ModulesControls setModuleName={setModuleName} moduleName={moduleName} addModule={addModuleHandler}
      />}<br /><br /><br /><br />
      <ul id="wd-modules" className="list-group rounded-0">
        {modules
          .map((module: any) => (
            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray" key={module._id}>
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                {!module.editing && module.name}
                {module.editing && (
                  <FormControl className="w-50 d-inline-block"
                    onChange={(e) => updateModuleHandler({ ...module, name: e.target.value })}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        updateModuleHandler({ ...module, editing: false });
                      }
                    }}
                    defaultValue={module.name} />
                )}
                {currentUser.role === "FACULTY" && <ModuleControlButtons moduleId={module._id}
                  deleteModule={(moduleId) => deleteModuleHandler(moduleId)}
                  editModule={(moduleId) => dispatch(editModule(moduleId))} />}           </div>
              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <li className="wd-lesson list-group-item p-3 ps-1" key={lesson._id}>
                      <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                    </li>
                  ))}</ul>)}</li>))}</ul>
    </div>
  );
}