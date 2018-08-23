/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { InventoryManagementSystemTestModule } from '../../../test.module';
import { StockImsUpdateComponent } from 'app/entities/stock-ims/stock-ims-update.component';
import { StockImsService } from 'app/entities/stock-ims/stock-ims.service';
import { StockIms } from 'app/shared/model/stock-ims.model';

describe('Component Tests', () => {
    describe('StockIms Management Update Component', () => {
        let comp: StockImsUpdateComponent;
        let fixture: ComponentFixture<StockImsUpdateComponent>;
        let service: StockImsService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [InventoryManagementSystemTestModule],
                declarations: [StockImsUpdateComponent]
            })
                .overrideTemplate(StockImsUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(StockImsUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(StockImsService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new StockIms(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.stock = entity;
                    // WHEN
                    comp.save();
                    tick(); // simulate async

                    // THEN
                    expect(service.update).toHaveBeenCalledWith(entity);
                    expect(comp.isSaving).toEqual(false);
                })
            );

            it(
                'Should call create service on save for new entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new StockIms();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.stock = entity;
                    // WHEN
                    comp.save();
                    tick(); // simulate async

                    // THEN
                    expect(service.create).toHaveBeenCalledWith(entity);
                    expect(comp.isSaving).toEqual(false);
                })
            );
        });
    });
});
