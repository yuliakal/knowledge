import { GenericPreview } from 'components';
import { getModelImages, getModelLanguage, Model, NewsModel } from 'lib/models';
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
 * NEWS TEMPLATE TYPE
 * ---
 * Defines to which resources is template attached
 */
const NewsTemplateType = () => NewsModel.getResourceType();

/**
 * NEWS TEMPLATE RELATED
 * ---
 * Defines related resources required for printing template
 */
const NewsTemplateRelated: TemplateRelated = () => [
  'related',
  'related.' + Model.defaultRelationshipNames.Language,
  'related.' + Model.defaultRelationshipNames.Images,
  'related.' + Model.defaultRelationshipNames.Owner,
];

/**
 * NEWS TEMPLATE OUTPUT
 * ---
 * Generates template output
 */
const NewsTemplateOutput: TemplateOutput = (
  resource: Resource,
  stateProvider: StoreStateProvider,
  dispatch: Dispatch,
) => {
  // creates proper model instance
  const model = NewsModel.instance(resource);
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
 * NEWS TEMPLATE
 */
const NewsTemplate: Template = {
  getType: NewsTemplateType,
  getRelated: NewsTemplateRelated,
  getOutput: NewsTemplateOutput,
};

/**
 * EXPORTS
 */
export { NewsTemplate };
