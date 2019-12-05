import React from 'react';
import { Route, Switch } from 'react-router-dom';

import BasicForm from '../../../Form/BasicForm/index';
import CheckFormControls from '../../../Form/CheckFormControls/index';
import FileUpload from '../../../Form/FileUpload/index';
import FloatingLabelsForm from '../../../Form/FloatingLabelsForm/index';
import FormDropzone from '../../../Form/FormDropzone/index';
import FormLayouts from '../../../Form/FormLayouts/index';
import FormPicker from '../../../Form/FormPicker/index';
import FormValidation from '../../../Form/FormValidation/index';
import MaskForm from '../../../Form/MaskForm/index';
import MaterialForm from '../../../Form/MaterialForm/index';
import WizardForm from '../../../Form/WizardForm/index';

export default () => (
  <Switch>
    <Route path="/forms/basic_form" component={BasicForm} />
    <Route path="/forms/check_form_controls" component={CheckFormControls} />
    <Route path="/forms/file_upload" component={FileUpload} />
    <Route path="/forms/floating_labels_form" component={FloatingLabelsForm} />
    <Route path="/forms/form_dropzone" component={FormDropzone} />
    <Route path="/forms/form_layouts" component={FormLayouts} />
    <Route path="/forms/form_picker" component={FormPicker} />
    <Route path="/forms/form_validation" component={FormValidation} />
    <Route path="/forms/mask_form" component={MaskForm} />
    <Route path="/forms/material_form" component={MaterialForm} />
    <Route path="/forms/wizard_form" component={WizardForm} />
  </Switch>
);
