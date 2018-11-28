import { GenericPreview } from 'components';
import { getModelImages, getModelLanguage, Model, PocHelpModel } from 'lib/models';
import { LayoutActionCreators } from 'lib/store/layout';
import { Dispatch } from 'redux';
import {
  Template,
  TemplateOutput,
  TemplateRelated,
  Resource,
  StoreStateProvider,
  Imprint,
  LayoutDialogType,
  ImageSize,
} from 'lib/types';

/**
 * POC HELP TEMPLATE TYPE
 * ---
 * Defines to which resources is template attached
 */
const PocHelpTemplateType = () => PocHelpModel.getResourceType();

/**
 * POC HELP TEMPLATE RELATED
 * ---
 * Defines related resources required for printing template
 */
const PocHelpTemplateRelated: TemplateRelated = () => [
  Model.defaultRelationshipNames.Language,
  Model.defaultRelationshipNames.Images,
  Model.defaultRelationshipNames.Owner,
];

/**
 * POC HELP TEMPLATE OUTPUT
 * ---
 * Generates template output
 */
const PocHelpTemplateOutput: TemplateOutput = (
  resource: Resource,
  stateProvider: StoreStateProvider,
  dispatch: Dispatch,
) => {
  // creates proper model instance
  const model = PocHelpModel.instance(resource);
  model.connectToState(stateProvider);
  // creates relations helpers
  const language = getModelLanguage(model);
  const images = getModelImages(model);
  // creates on open action callback
  const onOpen = (entity: Imprint) =>
    dispatch(LayoutActionCreators.openDialog(LayoutDialogType.Detail, entity));

  return (
    <GenericPreview
      onOpen={onOpen}
      title={language.getTitle()}
      purpose={language.getPurpose()}
      cover={images.getCover(ImageSize.LG_HDPI)}
      coloring={model.getColoring()}
      pictogram={model.getPictogram()}
      imprint={model.getImprint()}
    />
  );
};

/**
 * POC HELP TEMPLATE
 */
const PocHelpTemplate: Template = {
  getType: PocHelpTemplateType,
  getRelated: PocHelpTemplateRelated,
  getOutput: PocHelpTemplateOutput,
};

/**
 * EXPORTS
 */
export { PocHelpTemplate };
