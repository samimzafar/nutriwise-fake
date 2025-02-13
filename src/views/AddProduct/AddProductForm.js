import { useForm, Controller } from 'react-hook-form'
import {
  Form,
  Input,
  Button,
  Upload,
  Typography,
  Row,
  Col,
  Card,
  Space,
  InputNumber,
  Select,
  Divider,
  message,
  Tooltip,
} from 'antd'
import {
  PlusOutlined,
  SaveOutlined,
  BarcodeOutlined,
  ShoppingOutlined,
  TagOutlined,
  BoxPlotOutlined,
  BuildOutlined,
  InfoCircleOutlined,
  DollarOutlined,
} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const { TextArea } = Input

const AddProductForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const navigate = useNavigate()
  const onSubmitWithValidation = async (data) => {
    if (data.images && data.images.length === 0) {
      message.error('Please upload at least one product image')
      return
    }
    const remainingParams = {
      status: true,
      ean: data.barcodeNumber,
      imageObjectFile: data.images[0].originFileObj,
      productData: data,
    }
    navigate('/addproduct/add-ingredient', { state: { remainingParams } })
  }

  return (
    <Card className="add-product-form">
      <Form layout="vertical" onFinish={handleSubmit(onSubmitWithValidation)}>
        <Row gutter={16}>
          <Col span={16}>
            <Row gutter={12}>
              <Col span={12}>
                <Controller
                  name="title"
                  control={control}
                  rules={{
                    required: 'Product title is required',
                    minLength: {
                      value: 3,
                      message: 'Title must be at least 3 characters long',
                    },
                  }}
                  render={({ field }) => (
                    <Form.Item
                      label="Product Title"
                      validateStatus={errors.title ? 'error' : ''}
                      help={errors.title?.message}
                    >
                      <Input
                        {...field}
                        prefix={<ShoppingOutlined />}
                        placeholder="Enter product title"
                      />
                    </Form.Item>
                  )}
                />
              </Col>
              <Col span={12}>
                <Controller
                  name="barcodeNumber"
                  control={control}
                  rules={{
                    required: 'Barcode number is required',
                    pattern: {
                      value: /^[0-9]{12,13}$/,
                      message: 'Invalid barcode format',
                    },
                  }}
                  render={({ field }) => (
                    <Form.Item
                      label="Barcode Number"
                      validateStatus={errors.barcodeNumber ? 'error' : ''}
                      help={errors.barcodeNumber?.message}
                    >
                      <Input
                        {...field}
                        prefix={<BarcodeOutlined />}
                        placeholder="Enter 12 or 13-digit barcode"
                      />
                    </Form.Item>
                  )}
                />
              </Col>
            </Row>

            <Controller
              name="description"
              control={control}
              rules={{
                required: 'Product description is required',
                minLength: {
                  value: 20,
                  message: 'Description must be at least 20 characters long',
                },
              }}
              render={({ field }) => (
                <Form.Item
                  label="Product Description"
                  validateStatus={errors.description ? 'error' : ''}
                  help={errors.description?.message}
                >
                  <TextArea
                    {...field}
                    rows={4}
                    placeholder="Enter detailed product description"
                  />
                </Form.Item>
              )}
            />

            <Row gutter={12}>
              <Col span={8}>
                <Controller
                  name="category"
                  control={control}
                  rules={{ required: 'Category is required' }}
                  render={({ field }) => (
                    <Form.Item
                      label="Category"
                      validateStatus={errors.category ? 'error' : ''}
                      help={errors.category?.message}
                    >
                      <Select {...field} placeholder="Select category">
                        <Select.Option value="electronics">
                          Electronics
                        </Select.Option>
                        <Select.Option value="clothing">Clothing</Select.Option>
                        <Select.Option value="food">Food</Select.Option>
                        <Select.Option value="home">
                          Home & Garden
                        </Select.Option>
                        <Select.Option value="beauty">
                          Beauty & Personal Care
                        </Select.Option>
                      </Select>
                    </Form.Item>
                  )}
                />
              </Col>
              <Col span={8}>
                <Controller
                  name="brand"
                  control={control}
                  rules={{ required: 'Brand is required' }}
                  render={({ field }) => (
                    <Form.Item
                      label="Brand"
                      validateStatus={errors.brand ? 'error' : ''}
                      help={errors.brand?.message}
                    >
                      <Input
                        {...field}
                        prefix={<TagOutlined />}
                        placeholder="Enter brand name"
                      />
                    </Form.Item>
                  )}
                />
              </Col>
              <Col span={8}>
                <Controller
                  name="price"
                  control={control}
                  rules={{
                    required: 'Price is required',
                    min: {
                      value: 0.01,
                      message: 'Price must be greater than 0',
                    },
                  }}
                  render={({ field }) => (
                    <Form.Item
                      label="Price"
                      validateStatus={errors.price ? 'error' : ''}
                      help={errors.price?.message}
                    >
                      <InputNumber
                        {...field}
                        min={0}
                        step={0.01}
                        prefix={<DollarOutlined />}
                        style={{ width: '100%' }}
                        placeholder="Enter price"
                      />
                    </Form.Item>
                  )}
                />
              </Col>
            </Row>

            <Row gutter={12}>
              <Col span={12}>
                <Controller
                  name="model"
                  control={control}
                  rules={{ required: 'Model is required' }}
                  render={({ field }) => (
                    <Form.Item
                      label="Model"
                      validateStatus={errors.model ? 'error' : ''}
                      help={errors.model?.message}
                    >
                      <Input
                        {...field}
                        prefix={<BoxPlotOutlined />}
                        placeholder="Enter model number"
                      />
                    </Form.Item>
                  )}
                />
              </Col>
              <Col span={12}>
                <Controller
                  name="manufacturer"
                  control={control}
                  rules={{ required: 'Manufacturer is required' }}
                  render={({ field }) => (
                    <Form.Item
                      label="Manufacturer"
                      validateStatus={errors.manufacturer ? 'error' : ''}
                      help={errors.manufacturer?.message}
                    >
                      <Input
                        {...field}
                        prefix={<BuildOutlined />}
                        placeholder="Enter manufacturer"
                      />
                    </Form.Item>
                  )}
                />
              </Col>
            </Row>

            <Divider orientation="left">Product Dimensions</Divider>
            <Row gutter={12}>
              <Col span={6}>
                <Controller
                  name="length"
                  control={control}
                  rules={{
                    required: 'Length is required',
                    min: { value: 0, message: 'Length must be positive' },
                  }}
                  render={({ field }) => (
                    <Form.Item
                      label="Length"
                      validateStatus={errors.length ? 'error' : ''}
                      help={errors.length?.message}
                    >
                      <InputNumber
                        {...field}
                        min={0}
                        step={0.1}
                        addonAfter="in"
                        placeholder="Length"
                        style={{ width: '100%' }}
                      />
                    </Form.Item>
                  )}
                />
              </Col>
              <Col span={6}>
                <Controller
                  name="width"
                  control={control}
                  rules={{
                    required: 'Width is required',
                    min: { value: 0, message: 'Width must be positive' },
                  }}
                  render={({ field }) => (
                    <Form.Item
                      label="Width"
                      validateStatus={errors.width ? 'error' : ''}
                      help={errors.width?.message}
                    >
                      <InputNumber
                        {...field}
                        min={0}
                        step={0.1}
                        addonAfter="in"
                        placeholder="Width"
                        style={{ width: '100%' }}
                      />
                    </Form.Item>
                  )}
                />
              </Col>
              <Col span={6}>
                <Controller
                  name="height"
                  control={control}
                  rules={{
                    required: 'Height is required',
                    min: { value: 0, message: 'Height must be positive' },
                  }}
                  render={({ field }) => (
                    <Form.Item
                      label="Height"
                      validateStatus={errors.height ? 'error' : ''}
                      help={errors.height?.message}
                    >
                      <InputNumber
                        {...field}
                        min={0}
                        step={0.1}
                        addonAfter="in"
                        placeholder="Height"
                        style={{ width: '100%' }}
                      />
                    </Form.Item>
                  )}
                />
              </Col>
              <Col span={6}>
                <Controller
                  name="weight"
                  control={control}
                  rules={{
                    required: 'Weight is required',
                    min: { value: 0, message: 'Weight must be positive' },
                  }}
                  render={({ field }) => (
                    <Form.Item
                      label="Weight"
                      validateStatus={errors.weight ? 'error' : ''}
                      help={errors.weight?.message}
                    >
                      <InputNumber
                        {...field}
                        min={0}
                        step={0.1}
                        addonAfter="gm"
                        placeholder="Weight"
                        style={{ width: '100%' }}
                      />
                    </Form.Item>
                  )}
                />
              </Col>
            </Row>
          </Col>

          <Col span={8}>
            <Card
              title={
                <Typography.Title level={5}>Product Images</Typography.Title>
              }
              extra={
                <Tooltip title="Upload high-quality images of your product">
                  <InfoCircleOutlined />
                </Tooltip>
              }
            >
              <Controller
                name="images"
                control={control}
                rules={{ required: 'At least one image is required' }}
                render={({ field }) => (
                  <Form.Item
                    validateStatus={errors.images ? 'error' : ''}
                    help={errors.images?.message}
                  >
                    <Upload
                      listType="picture-card"
                      fileList={field.value}
                      onChange={({ fileList }) => field.onChange(fileList)}
                      beforeUpload={() => false}
                      multiple
                    >
                      <div>
                        <PlusOutlined />
                        <div style={{ marginTop: 8 }}>Upload</div>
                      </div>
                    </Upload>
                  </Form.Item>
                )}
              />
            </Card>

            <Card
              title={
                <Typography.Title level={5}>
                  Additional Information
                </Typography.Title>
              }
              className="mt-4"
            >
              <Controller
                name="ingredients"
                control={control}
                rules={{ required: 'Ingredients are required' }}
                render={({ field }) => (
                  <Form.Item
                    label="Ingredients"
                    validateStatus={errors.ingredients ? 'error' : ''}
                    help={errors.ingredients?.message}
                  >
                    <TextArea
                      {...field}
                      rows={4}
                      placeholder="Enter ingredients (if applicable)"
                    />
                  </Form.Item>
                )}
              />

              <Controller
                name="nutrientFacts"
                control={control}
                rules={{ required: 'Nutrient facts are required' }}
                render={({ field }) => (
                  <Form.Item
                    label="Nutrient Facts"
                    validateStatus={errors.nutrientFacts ? 'error' : ''}
                    help={errors.nutrientFacts?.message}
                  >
                    <TextArea
                      {...field}
                      rows={4}
                      placeholder="Enter nutrient facts (if applicable)"
                    />
                  </Form.Item>
                )}
              />
            </Card>
          </Col>
        </Row>

        <Form.Item>
          <Space size="large">
            <Button
              type="primary"
              htmlType="submit"
              icon={<SaveOutlined />}
              size="large"
            >
              Add Product
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default AddProductForm
